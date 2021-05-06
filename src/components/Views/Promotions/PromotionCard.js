import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import PromoImg1 from "../../../images/promo-img-1.png";
import useWindowSize from "../../../hooks/useWindowSize";

export default function PromotionCard({
  title,
  mainText,
  className,
  // hasDeposit,
  preview,
  setIsModalOpen,
  showInHomepage,
}) {
  const { width } = useWindowSize();
  return width > 720 ? (
    <div
      data-component="PromotionCard"
      className={`flex flex-col border border-bd-primary ${
        !showInHomepage ? "bg-bg-secondary" : "bg-bg-secondary"
      } space-y-4 rounded-md text-white ${className}`}
    >
      <div
        style={{
          background: `${!showInHomepage ? `url(${PromoImg1})` : "#0D2950"}`,
          backgroundPosition: "center center",
          backgroundSize: "100%",
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
          paddingTop: "47%",
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 0px 0px 18px 10px #011C41",
          WebkitBoxShadow: "inset 0px 0px 18px 10px #011C41",
        }}
      >
        {/* <img
          src={PromoImg1}
          alt="Promo banner"
          className="object-contain w-full"
        /> */}
      </div>

      <div className="py-1 px-2 space-y-2 lg:py-3 lg:px-4 lg:space-y-4">
        <h3 className="text-lg uppercase font-bold whitespace-nowrap truncate text-brand-primary">
          {title}
        </h3>
        <p> {mainText} </p>
        <div className="flex space-x-4 justify-center py-1">
          {/* {hasDeposit && (
          <MainButton className="bg-brand-primary text-bg-secondary font-bold">
            Deposit
          </MainButton>
        )} */}
          {!preview && (
            <MainButton
              onClick={() => setIsModalOpen(true)}
              className="normal-case rounded-sm"
            >
              Learn more
            </MainButton>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div
      data-component="PromotionCard"
      className={`flex flex-col border-b border-bd-primary ${
        !showInHomepage ? "bg-bg-secondary" : "bg-bg-secondary"
      } space-y-4 rounded-md text-white ${className}`}
    >
      <div
        style={{
          background: `${!showInHomepage ? `url(${PromoImg1})` : "#0D2950"}`,
          backgroundPosition: "center center",
          backgroundSize: "100%",
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
          paddingTop: "47%",
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 0px 0px 18px 10px #011C41",
          WebkitBoxShadow: "inset 0px 0px 18px 10px #011C41",
        }}
      >
        {/* <img
        src={PromoImg1}
        alt="Promo banner"
        className="object-contain w-full"
      /> */}
      </div>

      <div className="py-1 px-2 space-y-2 lg:py-3 lg:px-4 lg:space-y-4">
        <h3 className="text-lg uppercase font-bold whitespace-nowrap truncate text-brand-primary">
          {title}
        </h3>
        <p> {mainText} </p>
        <div className="flex space-x-4 justify-center py-1">
          {/* {hasDeposit && (
        <MainButton className="bg-brand-primary text-bg-secondary font-bold">
          Deposit
        </MainButton>
      )} */}
          {!preview && (
            <MainButton
              onClick={() => setIsModalOpen(true)}
              className="normal-case rounded-sm"
            >
              Learn more
            </MainButton>
          )}
        </div>
      </div>
    </div>
  );
}
