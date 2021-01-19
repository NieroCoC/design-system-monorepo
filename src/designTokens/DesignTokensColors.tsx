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
  ];

  return (
    <div>
      <h1>Primary</h1>
      <div className="msk-flex msk-flex-col md:msk-w-full lg:msk-w-1/2">
        {primaryColors.map((color) => (
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
