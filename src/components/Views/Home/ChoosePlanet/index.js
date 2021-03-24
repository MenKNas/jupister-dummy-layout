import * as React from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import "swiper/swiper-bundle.css";
import { ChoosePlanetMobile, MobileInfoCard } from "./PlanetsMobile";
import { InfoCard, PlanetCard } from "./PlanetsDesktop";
// import underheading from "../../../icons/under-heading.svg";
// image imports (CRA)
import NeptuneImg from "../../../../../src/images/planets/Neptune.png";
import MarsImg from "../../../../../src/images/planets/Mars.png";
import JupiterImg from "../../../../../src/images/planets/Jupiter.png";
import XOS24Img from "../../../../../src/images/planets/XOS-24.png";

const NO_OF_SLIDES = 3;

const planets = [
  {
    planetName: "Neptune",
    category: "Casino Planet",
    planetImg: NeptuneImg,
  },
  {
    planetName: "Mars",
    category: "Live Casino Planet",
    planetImg: MarsImg,
  },
  {
    planetName: "Jupiter",
    category: "Sports Planet",
    planetImg: JupiterImg,
  },
  {
    planetName: "XOS-24",
    category: "Virtual Sports Planet",
    planetImg: XOS24Img,
  },
  // {
  //   planetName: "Earth",
  //   category: "YOLO Planet",
  //   planetImg: XOS24Img,
  // },
];

export default function ChoosePlanet() {
  const [selectedPlanet, setSelectedPlanet] = React.useState(planets[0]);
  const [activeIndex, setActiveIndex] = React.useState(NO_OF_SLIDES);
  const { width } = useWindowSize();
  return width < 768 ? (
    <>
      <ChoosePlanetMobile
        setSelectedPlanet={setSelectedPlanet}
        setActiveIndex={setActiveIndex}
        numberOfSlides={NO_OF_SLIDES}
        planets={planets}
      />
      <MobileInfoCard
        activeIndex={activeIndex}
        setSelectedPlanet={setSelectedPlanet}
        selectedPlanet={selectedPlanet}
        planets={planets}
        numberOfSlides={NO_OF_SLIDES}
      />
    </>
  ) : (
    <div className="flex md:flex-col lg:flex-row md:justify-between md:items-center md:my-8 md:space-y-6 space-x-12">
      <div className="flex justify-between w-5/6 lg:w-3/5">
        {planets.map((planet) => {
          return (
            <PlanetCard
              key={planet.name}
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
