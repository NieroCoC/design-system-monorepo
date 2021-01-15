import "../src/assets/css/compiled.css";

import { addons } from "@storybook/addons";
import yourTheme from "./mskTheme";

console.log(yourTheme);
addons.setConfig({
  theme: yourTheme,
});
