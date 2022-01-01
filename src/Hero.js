import React from "react";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return <section onMouseOver={closeSubmenu}></section>;
};

export default Hero;
