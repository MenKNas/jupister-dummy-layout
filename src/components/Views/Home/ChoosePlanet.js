import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import TextTransition, { presets } from "react-text-transition";
import classNames from "classnames";
import useWindowSize from "../../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const planets = [
  { planetName: "Jupiter", category: "Casino" },
  { planetName: "Mars", category: "Sports" },
  { planetName: "Venus", category: "Venus" },
  { planetName: "Neptune", category: "Virtuals" },
];

function PlanetCard({ planet, selectedPlanet, setSelectedPlanet }) {
  let isSelected = planet === selectedPlanet ? true : false;
  return (
    <div className="" onClick={() => setSelectedPlanet(planet)}>
      <div className="flex flex-col justify-center text-center cursor-pointer items-center text-white">
        <img src="/" alt="planet" />
        <div
          className={classNames("flex flex-col p-2", {
            "bg-gray-800 rounded-md text-white": isSelected,
          })}
        >
          <span className="text-lg uppercase"> {planet.planetName}</span>
          <span className="text-sm"> {planet.category} </span>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ selectedPlanet }) {
  return (
    <div className="flex flex-col bg-gray-800 p-3 space-y-4 rounded-md md:w-1/2 lg:w-1/3">
      <div className="flex justify-between border-b border-gray-400 items-center">
        <div className="flex flex-col py-4 transition duration-500 ease-out">
          <TextTransition
            springConfig={presets.gentle}
            text={selectedPlanet.planetName}
            className="uppercase text-yellow-300 text-lg"
          />
          <TextTransition
            springConfig={presets.gentle}
            text={`${selectedPlanet.category} Planet`}
            className="uppercase text-white text-sm"
          />
        </div>
        <MainButton secondary> Register </MainButton>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col text-white">
          <span> 1st Deposit Casino Bonus </span>
          <span> 1st Deposit Casino Bonus </span>
          <span> 1st Deposit Casino Bonus </span>
        </div>
        <div className="flex flex-col text-yellow-300">
          <span> Blabla </span>
          <span> blabla </span>
          <span> blabla </span>
        </div>
      </div>
    </div>
  );
}

function ChoosePlanetMobile() {
  const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };
  return (
    <div className="text-white py-8 space-y-4">
      <h2 className="uppercase"> Choose your planet </h2>
      <Swiper
        id="main"
        slidesPerView={3}
        spaceBetween={40}
        centeredSlides={true}
        speed={500}
        centeredSlidesBounds={true}
        slideToClickedSlide={true}
        loop
        navigation={navigation}
        uniqueNavElements
      >
        {planets.map((planet, index) => {
          return (
            <>
              <SwiperSlide key={index} virtualIndex={index}>
                {({ isActive }) => {
                  return (
                    <>
                      <div
                        className={`flex flex-row transform scale-75 items-center opacity-50 mx-auto ${
                          isActive
                            ? "transform scale-100 transition-transform duration-400 opacity-100 text-lg"
                            : "text-sm"
                        }`}
                      >
                        <div
                          className={`flex flex-col justify-center items-center rounded-md py-2 px-4 bg-bg-secondary mx-auto ${
                            isActive ? "text-brand-primary " : ""
                          }`}
                        >
                          <span> {planet.planetName} </span>
                          <span> {planet.category} </span>
                        </div>
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
                    </>
                  );
                }}
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}

export default function ChoosePlanet() {
  const [selectedPlanet, setSelectedPlanet] = React.useState(planets[0]);
  const { width } = useWindowSize();
  return width < 768 ? (
    <ChoosePlanetMobile />
  ) : (
    <div className="flex md:flex-col lg:flex-row md:justify-evenly md:items-center md:my-8 md:space-y-6 space-x-6">
      <div className="flex justify-evenly md:w-4/5">
        {planets.map((planet) => {
          return (
            <PlanetCard
              planet={planet}
              selectedPlanet={selectedPlanet}
              setSelectedPlanet={setSelectedPlanet}
            />
          );
        })}
      </div>
      <InfoCard selectedPlanet={selectedPlanet} />
    </div>
  );
}
