import * as React from "react";
import {
  differenceInDays,
  endOfDay,
  isBefore,
  parseISO,
  startOfDay,
} from "date-fns";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/animationVariants";
// import { useUpdateEffect } from "react-use";
import { useTranslation } from "react-i18next";
import { DateRangePicker } from "../../../Generic/DateRangePicker";
import { Details } from "../DetailsModal";
import { BetStatus } from "../BetStatus";
import { DateTime } from "../../../Generic/DateTime";
import { Currency } from "../../../Generic/Currency";
import { Pagination } from "../../../Generic/Pagination";
import { Field } from "../../../Inputs/Field";
import MainButton from "../../../Buttons/MainButton";
import { ReactComponent as SearchIcon } from "../../../../icons/search-icon.svg";
import useWindowSize from "../../../../hooks/useWindowSize";

const ROWS_PER_PAGE = 25;

const BET_OPTIONS = [
  "ALL_BETS",
  "OPEN_BETS",
  "WON_BETS",
  "LOST_BETS",
  "CANCELED_BETS",
];

const BETTING_CATEGORIES = ["SPORTS_BOOK", "LIVE_RACING"];

// const GET_BETS = gql`
//   query coreGetBets(
//     $category: String
//     $filter: BetsFilter!
//     $from: String!
//     $to: String!
//     $limit: Int!
//     $offset: Int!
//   ) {
//     result: coreGetBets(
//       category: $category
//       filter: $filter
//       from: $from
//       to: $to
//       limit: $limit
//       offset: $offset
//     ) {
//       count
//       items {
//         ...betInfo
//       }
//     }
//   }
//   ${betInfoFragment}
// `;

function Table({ data: { items, count }, offset, setOffset, loading }) {
  const { t } = useTranslation();
  const totalPages = Math.floor((count - 1) / ROWS_PER_PAGE + 1);
  const setPage = React.useCallback(
    (page) => {
      const nextPage = Math.max(Math.min(page, totalPages), 1);
      return setOffset((nextPage - 1) * ROWS_PER_PAGE);
    },
    [setOffset, totalPages]
  );
  const ref = React.useRef();
  // const { headerHeight } = useLayout();
  // useUpdateEffect(() => {
  //   if (!ref.current) return;
  //   const rec = ref.current.getBoundingClientRect();
  //   const bodyRect = document.body.getBoundingClientRect();
  //   const position = rec.top - bodyRect.top - headerHeight;
  //   window.scrollTo({ top: position, behavior: "smooth" });
  // }, [offset, headerHeight]);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" ref={ref}>
          <thead>
            <tr>
              <th className="py-2 border-b border-bd-primary text-left" />
              <th className="py-2 border-b border-bd-primary text-left text-text-secondary">
                {t("global.date")}
              </th>
              <th className="py-2 border-b border-bd-primary text-left text-text-secondary">
                {t("global.description")}
              </th>
              <th className="py-2 border-b border-bd-primary text-right text-text-secondary">
                {t("global.stake")}
              </th>
              <th className="py-2 border-b border-bd-primary text-right text-text-secondary">
                {t("global.possible_returns")}
              </th>
              <th className="py-2 border-b border-bd-primary text-right text-text-secondary">
                {t("global.actual_returns")}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((props, idx) => {
              const {
                created,
                stake,
                description,
                actualReturns,
                possibleReturns,
                betStatus,
              } = props;
              return (
                <Details key={idx} value={props}>
                  {(toggle) => (
                    <tr onClick={toggle} className="cursor-pointer">
                      <td className="py-1 whitespace-nowrap border-b border-bd-primary text-white">
                        <BetStatus status={betStatus} short />
                      </td>
                      <td className="py-1 whitespace-nowrap border-b border-bd-primary text-white">
                        <DateTime date={created} />
                      </td>
                      <td className="py-1 whitespace-nowrap border-b border-bd-primary text-white">
                        {description}
                      </td>
                      <td className="py-1 whitespace-nowrap border-b border-bd-primary text-right text-white">
                        <Currency value={stake} />
                      </td>
                      <td className="py-1 whitespace-nowrap border-b border-bd-primary text-right text-white">
                        {possibleReturns !== null && (
                          <Currency value={possibleReturns} />
                        )}
                      </td>
                      <td className="py-1 whitespace-nowrap border-b border-bd-primary text-right text-white">
                        {actualReturns !== null && (
                          <Currency value={actualReturns} />
                        )}
                      </td>
                    </tr>
                  )}
                </Details>
              );
            })}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <Pagination
          count={count}
          page={offset / ROWS_PER_PAGE + 1}
          setPage={setPage}
          disabled={loading}
          rowsPerPage={ROWS_PER_PAGE}
        />
      )}
    </>
  );
}

function Form({
  defaultValue: { from, to, category, filter },
  setValue,
  disabled,
  width,
}) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category,
      filter,
      range: { from, to },
    },
    resolver: yupResolver(
      yup.object().shape({
        range: yup
          .object()
          .test(
            "Valid date",
            t("global.invalid_date_range"),
            ({ from, to }) => {
              return !(
                from === "" ||
                to === "" ||
                isBefore(parseISO(to), parseISO(from))
              );
            }
          )
          .test(
            "Max difference",
            t("global.difference_in_days_no_more_than", { maxDays: 180 }),
            ({ from, to }) => {
              const difference = differenceInDays(parseISO(to), parseISO(from));
              return difference >= 0 && difference <= 180;
            }
          ),
      })
    ),
  });
  return (
    <form
      className="flex flex-col space-y-2 lg:space-x-2 lg:flex-row lg:space-y-0"
      onSubmit={handleSubmit(({ range: { from, to }, category, filter }) =>
        setValue({ category, from, to, filter })
      )}
    >
      <div className="flex flex-row space-x-2">
        <div className="w-full">
          <Field invalid={errors?.category?.message}>
            <Field.Label className="text-text-secondary">Category</Field.Label>
            <Field.Select
              name="category"
              {...register("category")}
              className="h-10"
            >
              <option value="">{t("global.all_categories")}</option>
              {BETTING_CATEGORIES.map((value, index) => (
                <option value={value} key={index}>
                  {t(`category.${value.toLowerCase()}`)}
                </option>
              ))}
            </Field.Select>
            <Field.Error>{errors?.category?.message}</Field.Error>
          </Field>
        </div>
        <div className="w-full">
          <Field invalid={errors?.filter?.message}>
            <Field.Label className="text-text-secondary"> Filter </Field.Label>
            <Field.Select
              name="filter"
              {...register("filter")}
              className="h-10"
            >
              {BET_OPTIONS.map((value, index) => (
                <option value={value} key={value}>
                  {t(`global.${value.toLowerCase()}`)}
                </option>
              ))}
            </Field.Select>
            <Field.Error>{errors?.filter?.message}</Field.Error>
          </Field>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4 lg:space-y-0">
        <Field invalid={errors?.range?.message}>
          <Controller
            name="range"
            control={control}
            render={({ field }) => {
              return (
                <div className="flex flex-col w-full space-y-2 lg:space-x-2 lg:flex-row lg:space-y-0 lg:items-end">
                  <DateRangePicker
                    defaultValue={field.value}
                    onChange={field.onChange}
                    // isInvalid={errors.range?.message}
                  >
                    <DateRangePicker.RangeSelect
                      label="Range"
                      labelClasses="text-text-secondary"
                      disabled={disabled}
                      className="h-10"
                    />
                    {width < 1025 ? (
                      <div className="flex flex-row space-x-2 w-full lg:w-full">
                        <div className="w-1/2">
                          <DateRangePicker.FromInput
                            label="From"
                            labelClasses="text-text-secondary"
                            disabled={disabled}
                            className="h-10"
                          />
                        </div>
                        <div className="w-1/2 overflow-x-hidden">
                          <DateRangePicker.ToInput
                            label="To"
                            labelClasses="text-text-secondary"
                            disabled={disabled}
                            className="h-10"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <DateRangePicker.FromInput
                          label="From"
                          labelClasses="text-text-secondary"
                          disabled={disabled}
                          className="h-10"
                        />
                        <DateRangePicker.ToInput
                          label="To"
                          labelClasses="text-text-secondary"
                          disabled={disabled}
                          className="h-10"
                        />
                      </>
                    )}
                  </DateRangePicker>
                  <div className="hidden lg:block w-full md:w-auto">
                    <MainButton
                      formBtn
                      type="submit"
                      className="w-full md:w-auto h-10"
                      // disabled={disabled}
                      // loading={disabled}
                    >
                      {width < 620 ? "Submit" : <SearchIcon stroke="#031A39" />}
                    </MainButton>
                  </div>
                </div>
              );
            }}
          />
          <Field.Error>{errors.range?.message}</Field.Error>
        </Field>
        <div className="block lg:hidden w-full md:w-auto mx-auto">
          <MainButton
            formBtn
            type="submit"
            className="w-full md:w-auto md:ml-2 h-10"
            // disabled={disabled}
            // loading={disabled}
          >
            {width < 1025 ? "Submit" : <SearchIcon stroke="#031A39" />}
          </MainButton>
        </div>
      </div>
    </form>
  );
}

export default function BettingHistory() {
  // const { t } = useTranslation();
  const { width } = useWindowSize();
  const [input, setInput] = React.useState(() => ({
    offset: 0,
    category: "",
    filter: BET_OPTIONS[0],
    from: startOfDay(new Date()).toISOString(),
    to: endOfDay(new Date()).toISOString(),
  }));
  // const { loading, error, data } = useQuery(GET_BETS, {
  //   variables: {
  //     ...input,
  //     limit: ROWS_PER_PAGE,
  //   },
  //   fetchPolicy: "network-only",
  // });
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-3 space-y-4"
    >
      <Form
        defaultValue={input}
        setValue={(input) => setInput({ offset: 0, ...input })}
        width={width}
        //  disabled={loading}
      />
      {/* For now table will be displayed here...when we integrate GraphQL we will use the part below with the Alerts */}
      <Table
        data={{
          items: [
            {
              created: Date.now(),
              stake: 240,
              description: "dummy",
              actualReturns: 300,
              possibleReturns: 225,
              betStatus: "CANCELLED",
            },
          ],
          count: 0,
        }}
        offset={input.offset}
        setOffset={(offset) => setInput((prev) => ({ ...prev, offset }))}
      />
      {/* <div className="flex-1 relative">
        {error ? (
          <AbsoluteCenter>
            <ErrorsList
              errors={error.graphQLErrors.map(({ message }) => message)}
            />
          </AbsoluteCenter>
        ) : loading && data === undefined ? (
          <AbsoluteCenter>
            <Spinner />
          </AbsoluteCenter>
        ) : (data?.result?.items?.length ?? 0) === 0 ? (
          <Alert status="warning">
            <AlertContent>{t("global.no_bets_for_period")}</AlertContent>
          </Alert>
        ) : (
          <>
            <Table
              data={data.result}
              offset={input.offset}
              setOffset={(offset) => setInput((prev) => ({ ...prev, offset }))}
            />
            {loading && (
              <AbsoluteCenter>
                <Spinner />
              </AbsoluteCenter>
            )}
          </>
        )}
      </div> */}
    </motion.div>
  );
}
