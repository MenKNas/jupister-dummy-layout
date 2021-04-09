import * as React from "react";
// import MainButton from "../../Buttons/MainButton";
import { MobileAccount } from "./Mobile";
import { DesktopAccount } from "./Desktop";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Account() {
  const { width } = useWindowSize();
  console.log(width);
  return width < 768 ? (
    <MobileAccount />
  ) : (
    <DesktopAccount windowWidth={width} />
  );
}
