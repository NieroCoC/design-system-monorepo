import React from "react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  let mode = "rounded-md";

  if (primary) mode += " text-white bg-primary-base hover:bg-primary-shadow";
  if (!primary)
    mode +=
      " text-secondary-base border-2 border-secondary-base hover:text-secondary-shadow hover:border-secondary-shadow";
  if (size === "medium") mode += " px-10 py-3 text-xl";
  if (size === "small") mode += " px-6 py-2 text-sm";

  return (
    <button
      type="button"
      className={mode}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
