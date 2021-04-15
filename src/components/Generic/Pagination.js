import * as React from "react";
import classNames from "classnames";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation, Trans } from "react-i18next";

const BASE_SHIFT = 0;
const TITLE_SHIFT = 1;
const VISIBLE_PAGES = 5;

function range(start, end) {
  const res = [];
  for (let i = start; i < end; i++) res.push(i);
  return res;
}

function Page({
  active = false,
  disabled = false,
  children,
  onClick,
  className,
  ...rest
}) {
  return (
    <button
      className={classNames(
        className,
        "relative inline-flex items-center text-sm font-medium text-gray-700 hover:bg-gray-50",
        { "font-semibold": active }
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

const Pager = React.memo(
  ({
    currentPage,
    totalPages,
    visible = VISIBLE_PAGES,
    onChange,
    disabled = false,
  }) => {
    const { t } = useTranslation();
    const current = currentPage - 1;
    const blocks = React.useMemo(() => {
      const blocks = Math.ceil(totalPages / visible);
      const currBlock =
        Math.ceil((current + TITLE_SHIFT) / visible) - TITLE_SHIFT;

      return {
        total: blocks,
        current: currBlock,
      };
    }, [totalPages, visible, current]);

    const visibleRange = React.useMemo(() => {
      const start = blocks.current * visible;
      const delta = totalPages - start;
      const end = start + (delta > visible ? visible : delta);

      return [start + TITLE_SHIFT, end + TITLE_SHIFT];
    }, [blocks, totalPages, visible]);

    return (
      <nav className="relative z-0 inline-flex space-s-2">
        <Page
          disabled={current <= BASE_SHIFT || disabled}
          onClick={() => onChange(BASE_SHIFT + 1)}
        >
          {t("global.first")}
        </Page>
        <Page
          disabled={current <= BASE_SHIFT || disabled}
          onClick={() => onChange(current - TITLE_SHIFT + 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
        </Page>
        {!(blocks.total === TITLE_SHIFT || blocks.current === BASE_SHIFT) && (
          <Page
            disabled={disabled}
            onClick={() => onChange(blocks.current * visible - TITLE_SHIFT + 1)}
          >
            ...
          </Page>
        )}
        {range(...visibleRange).map((num) => {
          const curr = num - TITLE_SHIFT;
          const isActive = curr === current;

          return (
            <Page
              key={num}
              disabled={disabled}
              active={isActive}
              className="-ml-px"
              onClick={() => onChange(curr + 1)}
            >
              {num}
            </Page>
          );
        })}
        {!(
          blocks.total === TITLE_SHIFT ||
          blocks.current === blocks.total - TITLE_SHIFT
        ) && (
          <Page
            disabled={disabled}
            onClick={() =>
              onChange((blocks.current + TITLE_SHIFT) * visible + 1)
            }
          >
            ...
          </Page>
        )}
        <Page
          disabled={current >= totalPages - TITLE_SHIFT || disabled}
          onClick={() => onChange(current + TITLE_SHIFT + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
        </Page>
        <Page
          disabled={current >= totalPages - TITLE_SHIFT || disabled}
          onClick={() => onChange(totalPages - TITLE_SHIFT + 1)}
        >
          {t("global.last")}
        </Page>
      </nav>
    );
  }
);

export function Pagination({
  count: total,
  page,
  setPage,
  rowsPerPage,
  disabled,
}) {
  const { t } = useTranslation();
  const showing = (page - 1) * rowsPerPage + 1;
  const of = Math.min(page * rowsPerPage, total);
  return (
    <div className="flex items-center justify-between border-t border-gray-100 pt-2">
      <div className="flex-1 flex justify-between sm:hidden space-s-2">
        <button
          className="relative inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-500"
          onClick={() => setPage(page - 1)}
        >
          {t("global.previous")}
        </button>
        <button
          className="relative inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-500"
          onClick={() => setPage(page + 1)}
        >
          {t("global.next")}
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <Trans i18nKey="global.pagination_description">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{{ showing }}</span> to{" "}
            <span className="font-medium">{{ of }}</span> of{" "}
            <span className="font-medium">{{ total }}</span> results
          </div>
        </Trans>
        <Pager
          currentPage={page}
          totalPages={Math.floor((total - 1) / rowsPerPage + 1)}
          onChange={setPage}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
