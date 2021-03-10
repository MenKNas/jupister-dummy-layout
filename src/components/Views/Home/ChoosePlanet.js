import * as React from "react";
import MainButton from "../../Buttons/MainButton";
import TextTransition, { presets } from "react-text-transition";
import classNames from "classnames";

const planets = [
  { planetName: "Jupiter", category: "Casino" },
  { planetName: "Mars", category: "Sports" },
  { planetName: "Venus", category: "Venus" },
  { planetName: "Neptune", category: "Virtuals" },
];

function PlanetCard({ planet, selectedPlanet, setSelectedPlanet }) {
  let isSelected = planet === selectedPlanet ? true : false;
  return (
    <div className="w-1/6" onClick={() => setSelectedPlanet(planet)}>
      <div className="flex flex-col w-2/3 justify-center text-center cursor-pointer items-center text-white">
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
    <div className="flex flex-col bg-gray-800 w-2/6 p-3 space-y-4 rounded-md">
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

export default function ChoosePlanet() {
  const [selectedPlanet, setSelectedPlanet] = React.useState(planets[0]);
  return (
    <div className="hidden lg:flex lg:justify-evenly lg:items-center lg:my-8">
      {planets.map((planet) => {
        return (
          <PlanetCard
            planet={planet}
            selectedPlanet={selectedPlanet}
            setSelectedPlanet={setSelectedPlanet}
          />
        );
      })}
      <InfoCard selectedPlanet={selectedPlanet} />
    </div>
  );
}
