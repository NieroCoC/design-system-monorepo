import { create } from "@storybook/theming/create";
import logo from "../src/assets/svg/mskcc.svg";

export default create({
  base: "light",

  colorPrimary: "#0968C3",
  colorSecondary: "#4DA4FA",

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  brandTitle: "MSKCC",
  brandUrl: "https://www.mskcc.org",
  brandImage: logo,
});
