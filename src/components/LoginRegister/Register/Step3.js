import * as React from "react";
import {
  ChoosePlanetMobile,
  MobileInfoCard,
} from "../../Views/Home/ChoosePlanet/PlanetsMobile";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
// image imports (CRA)
import NeptuneImg from "../../../images/planets/Neptune.png";
import MarsImg from "../../../images/planets/Mars.png";
import JupiterImg from "../../../images/planets/Jupiter.png";
import XOS24Img from "../../../images/planets/XOS-24.png";
import MainButton from "../../Buttons/MainButton";

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
];

const schema = (t) =>
  yup.object().shape({
    bonusPlanet: yup.string().required(),
  });

export default function Step3({ children, onSubmit, onBack, defaultValues }) {
  const { t } = useTranslation();
  const [selectedPlanet, setSelectedPlanet] = React.useState(planets[0]);
  const [activeIndex, setActiveIndex] = React.useState(NO_OF_SLIDES);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema(t)),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-full space-y-4 py-1 px-4"
    >
      <div className="space-y-2 mb-4">{children}</div>
      <div style={{ height: 250 }}>
        {" "}
        <ChoosePlanetMobile
          setSelectedPlanet={setSelectedPlanet}
          setActiveIndex={setActiveIndex}
          numberOfSlides={NO_OF_SLIDES}
          planets={planets}
        />
      </div>

      <MobileInfoCard
        activeIndex={activeIndex}
        setSelectedPlanet={setSelectedPlanet}
        selectedPlanet={selectedPlanet}
        planets={planets}
        numberOfSlides={NO_OF_SLIDES}
      />
      <MainButton
        formBtn
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        Register
      </MainButton>
    </form>
  );
}
