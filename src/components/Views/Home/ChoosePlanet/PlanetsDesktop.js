import * as React from "react";
import MainButton from "../../../Buttons/MainButton";
import TextTransition, { presets } from "react-text-transition";
import classNames from "classnames";

export function PlanetCard({
  planet,
  selectedPlanet,
  setSelectedPlanet,
  ...rest
}) {
  let isSelected = planet === selectedPlanet ? true : false;
  return (
    <div onClick={() => setSelectedPlanet(planet)} {...rest}>
      <div className="flex flex-col justify-center text-center cursor-pointer items-center">
        <img
          src={planet.planetImg}
          alt="planet"
          className="z-10 relative top-2"
        />
        <div
          className={classNames("flex flex-col p-2 pt-4 px-4", {
            "bg-bg-secondary rounded-md text-white": isSelected,
          })}
        >
          <span className="text-lg uppercase font-black">
            {planet.planetName}
          </span>
          <span className="text-sm text-text-secondary">{planet.category}</span>
        </div>
      </div>
    </div>
  );
}

export function InfoCard({ selectedPlanet }) {
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
