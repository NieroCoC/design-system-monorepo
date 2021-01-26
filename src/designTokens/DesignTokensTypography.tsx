import React, { Fragment } from "react";
import { Typography } from "../packages/atoms/src/Typography";

const typographyList = [
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "subtitle",
  "body",
  "caption",
];

const DesignTokensTypography = () => {
  return (
    <Fragment>
      {typographyList.map((t) => (
        <div className="msk-pb-8">
          <p className="msk-text-gray-500">{t}</p>
          {/* @ts-ignore */}
          <Typography variant={t}>Top text are here to stay.</Typography>
        </div>
      ))}
    </Fragment>
  );
};

export default DesignTokensTypography;
