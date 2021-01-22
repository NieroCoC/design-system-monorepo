import React, { FC } from "react";

export interface TypographyProps {
  /* Variants of typography component */
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "subtitle"
    | "body"
    | "caption";
}

export const Typography: FC<TypographyProps> = ({ variant, ...props }) => {
  if (variant === "heading1")
    return <h1 className="msk-text-5xl">{props.children}</h1>;

  if (variant === "heading2")
    return <h2 className="msk-text-4xl">{props.children}</h2>;

  if (variant === "heading3")
    return <h3 className="msk-text-3xl">{props.children}</h3>;

  if (variant === "heading4")
    return <h4 className="msk-text-2xl">{props.children}</h4>;

  if (variant === "heading5")
    return <h5 className="msk-text-xl">{props.children}</h5>;

  if (variant === "subtitle")
    return <h6 className="msk-text-lg">{props.children}</h6>;

  if (variant === "body")
    return <p className="msk-text-base">{props.children}</p>;

  if (variant === "caption")
    return <p className="msk-text-sm">{props.children}</p>;

  return <p className="msk-text-bases">{props.children}</p>;
};
