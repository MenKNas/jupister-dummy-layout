import * as React from "react";
import PromotionCard from "./PromotionCard";
import { Modal, ModalBody, ModalHeader } from "../../NewModal";
import { useClickAway } from "react-use";

export default function Promotions({ preview = false }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = React.useRef(null);
  useClickAway(modalRef, () => {
    setIsModalOpen(false);
  });
  return (
    <div className={preview ? "bg-transparent" : "bg-bg-secondary"}>
      <div
        style={{ maxWidth: 1400, margin: "0 auto" }}
        data-component="Promotions"
      >
        {preview ? (
          <div className="flex flex-col justify-center items-center space-y-6 md:py-3 lg:space-x-6 lg:flex-row lg:justify-between lg:space-y-0">
            {/* Promotions will probably be two images in flex-col for mobile and flex-row for desktop */}
            <PromotionCard preview={preview} className="w-1/2" />
            <PromotionCard preview={preview} className="w-1/2" />
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex-rows-2 items-center gap-8 lg:w-full lg:mx-auto h-full py-10 px-4 lg:px-0">
            <PromotionCard
              className="md:row-span-2 h-full justify-end"
              mainText="Get 750% Welcome Casino Package Bonus"
              title="Welcome Casino Package"
              hasDeposit
              setIsModalOpen={setIsModalOpen}
            />
            <PromotionCard
              className="h-full"
              title="Weekend Madness 75% Bonus"
              mainText="Get 750% Welcome Casino Package Bonus"
            />
            <PromotionCard
              className="h-full"
              title="Welcome Sports Bonus"
              mainText="Get 750% Welcome Casino Package Bonus"
            />
            <PromotionCard
              className="h-full"
              title="Cashback Bonus"
              mainText="Get 750% Welcome Casino Package Bonus"
            />
            <PromotionCard
              className="h-full"
              title="Magic Monday 50% Bonus"
              mainText="Get 750% Welcome Casino Package Bonus"
            />
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal size="sm" animated ref={modalRef} isOpen={isModalOpen}>
          <ModalHeader onClose={() => setIsModalOpen(false)}>
            HELLOOOO
          </ModalHeader>
          <ModalBody
            onClose={() => setIsModalOpen(false)}
            className="space-y-4 py-4"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porttitor pulvinar rhoncus. Vivamus laoreet faucibus cursus. Sed
              lacinia risus tempus neque varius, in pretium sapien dapibus.
              Maecenas facilisis nec metus sed elementum. Donec porttitor eget
              est vitae aliquet. Donec hendrerit imperdiet mattis. Nunc at
              scelerisque metus, quis fermentum ligula. Sed malesuada lacinia
              facilisis. Nam euismod gravida blandit. Nam tincidunt turpis
              egestas auctor condimentum. Fusce ut lectus ac neque fringilla
              ultricies eu ac ex. In bibendum nisl varius, gravida felis vel,
              lacinia tellus. Fusce bibendum ipsum quis erat gravida egestas.
              Suspendisse convallis suscipit leo, non imperdiet dolor luctus id.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Mauris risus erat, interdum
              eget tristique a, auctor nec metus. Etiam metus ex, eleifend ut
              mollis quis, tincidunt quis ipsum. Suspendisse arcu est, porta
              quis pretium nec, pretium sit amet ligula. Morbi gravida varius
              ligula, vel tempor velit vehicula a. Cras feugiat lectus vitae mi
              feugiat, eu ornare lacus convallis. Vestibulum vel lectus vel
              nulla dignissim cursus. Morbi vitae odio luctus, tempor dui
              sodales, facilisis purus. Etiam fringilla arcu mollis feugiat
              consectetur. Maecenas vitae nibh ac nisl vulputate pretium.
              Vestibulum accumsan auctor ultrices. Etiam varius tempus nibh in
              laoreet.
            </p>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
