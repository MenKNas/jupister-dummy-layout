import * as React from "react";
import MainButton from "../../../Buttons/MainButton";
import TextTransition, { presets } from "react-text-transition";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

export function ChoosePlanetMobile({
  setActiveIndex,
  planets,
  numberOfSlides,
}) {
  const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };
  return (
    <div className="text-white py-8 space-y-4">
      <Swiper
        id="main"
        slidesPerView={numberOfSlides}
        spaceBetween={40}
        centeredSlides={true}
        speed={500}
        centeredSlidesBounds={true}
        slideToClickedSlide={true}
        loop
        navigation={navigation}
        uniqueNavElements
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {planets.map((planet, index) => {
          return (
            <div key={index}>
              <SwiperSlide key={index} virtualIndex={index}>
                {({ isActive }) => {
                  return (
                    <>
                      <div
                        className={`flex flex-col transform-gpu scale-75 items-center opacity-50 mx-auto ${
                          isActive
                            ? "transform-gpu scale-100 transition-transform duration-500 opacity-100 text-lg"
                            : "text-sm"
                        }`}
                      >
                        <img
                          src={planet.planetImg}
                          alt="planet"
                          className={`z-50 mx-auto relative top-5 ${
                            isActive
                              ? "opacity-100 scale-100"
                              : "opacity-50 w-3/4"
                          }`}
                        />
                      </div>
                      <div
                        className={`swiper-button-next ${
                          isActive ? "opacity-100 -mr-10" : "opacity-0"
                        }`}
                      ></div>
                      <div
                        className={`swiper-button-prev ${
                          isActive ? "opacity-100 -ml-10" : "opacity-0"
                        }`}
                      ></div>
                      <div
                        className={`${
                          isActive ? "flex flex-col w-full" : "hidden"
                        } justify-center text-center pt-6`}
                      >
                        <span className="text-xl font-black uppercase text-white">
                          {planet.planetName}
                        </span>
                        <span className="text-sm text-text-secondary whitespace-nowrap">
                          {planet.category}
                        </span>
                      </div>
                    </>
                  );
                }}
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export function MobileInfoCard({
  activeIndex,
  setSelectedPlanet,
  selectedPlanet,
  planets,
  numberOfSlides,
}) {
  React.useEffect(() => {
    if (activeIndex < numberOfSlides)
      setSelectedPlanet(planets[planets.length - 1]);
    else if (activeIndex <= numberOfSlides - 1)
      setSelectedPlanet(planets[activeIndex + 1]);
    else if (activeIndex - numberOfSlides >= planets.length)
      setSelectedPlanet(planets[0]);
    else setSelectedPlanet(planets[activeIndex - numberOfSlides]);
  }, [activeIndex, setSelectedPlanet, planets, numberOfSlides]);

  return (
    <div className="flex flex-col bg-bg-secondary p-3 space-y-4 rounded-md md:w-1/2 lg:w-1/3 border border-bd-primary">
      <div className="flex justify-between border-b border-bd-primary items-center">
        <div className="flex flex-col py-4 transition duration-500 ease-out">
          <TextTransition
            springConfig={presets.gentle}
            text={selectedPlanet.planetName}
            className="uppercase text-white text-lg font-black"
          />
          <TextTransition
            springConfig={presets.gentle}
            text={`${selectedPlanet.category} Planet`}
            className="text-text-secondary text-sm"
          />
        </div>
        <MainButton secondary> Colonize It </MainButton>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col text-white">
          <span> 1st Deposit Casino: </span>
          <span> Daily Cashback: </span>
          <span> Casino Freespins: </span>
        </div>
        <div className="flex flex-col text-brand-primary text-right">
          <span> 100% Up to 500 &euro; </span>
          <span> 10% </span>
          <span> 100 Freespins </span>
        </div>
      </div>
    </div>
  );
}
