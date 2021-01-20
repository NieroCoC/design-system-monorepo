import React, { FC } from "react";

interface ColorProps {
  colorClassname: string;
  colorHexValue: string;
}

const Color: FC<ColorProps> = ({ colorClassname, colorHexValue }) => {
  return (
    <div className="msk-flex msk-flex-row msk-items-center msk-justify-between msk-py-2">
      <div className="msk-flex msk-flex-row msk-items-center">
        <div
          className={`${colorClassname} msk-h-12 msk-w-12 msk-rounded-md`}
        ></div>
        <text className="msk-pl-4">{colorClassname}</text>
      </div>
      <text className="msk-body-regular-primary">{colorHexValue}</text>
    </div>
  );
};

const DesignTokensColors = () => {
  const primaryColors = [
    {
      colorClassname: "msk-bg-primary-base",
      colorHexValue: "#0968C3",
    },
    {
      colorClassname: "msk-bg-primary-shadow",
      colorHexValue: "#064785",
    },
    {
      colorClassname: "msk-bg-primary-accent",
      colorHexValue: "#4DA4FA",
    },
    {
      colorClassname: "msk-bg-primary-accent-hover",
      colorHexValue: "#1B8BF9",
    },
    {
      colorClassname: "msk-bg-primary-highlight",
      colorHexValue: "#F7FBFF",
    },
    {
      colorClassname: "msk-bg-primary-highlight-light",
      colorHexValue: "#F4FAFE",
    },
    {
      colorClassname: "msk-bg-primary-primary-light",
      colorHexValue: "#D4E7FA",
    },
    {
      colorClassname: "msk-bg-primary-overlay",
      colorHexValue: "#1C73CA",
    },
  ];

  const secondaryColors = [
    { colorClassname: "msk-bg-secondary-base", colorHexValue: "#38657f" },
    {
      colorClassname: "msk-bg-secondary-shadow",
      colorHexValue: "#1F3C4C",
    },
    {
      colorClassname: "msk-bg-secondary-accent",
      colorHexValue: "#4F86A6",
    },
    {
      colorClassname: "msk-bg-secondary-accent-hover",
      colorHexValue: "#3F6A83",
    },
    {
      colorClassname: "msk-bg-secondary-highlight",
      colorHexValue: "#DDF0FC",
    },
  ];

  return (
    <div>
      <h1>Primary</h1>
      <div className="msk-flex msk-flex-col md:msk-w-full lg:msk-w-1/2 msk-divider">
        {primaryColors.map((color) => (
          <Color
            colorClassname={color.colorClassname}
            colorHexValue={color.colorHexValue}
          />
        ))}
      </div>
      <h1>Secondary</h1>
      <div className="msk-flex msk-flex-col md:msk-w-full lg:msk-w-1/2 msk-divider">
        {secondaryColors.map((color) => (
          <Color
            colorClassname={color.colorClassname}
            colorHexValue={color.colorHexValue}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignTokensColors;
