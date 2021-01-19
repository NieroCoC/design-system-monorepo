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
  let mode = "msk-rounded-md";

  if (primary)
    mode += " msk-text-white msk-bg-primary-base hover:msk-bg-primary-shadow";
  if (!primary)
    mode +=
      " msk-text-secondary-base msk-border-2 msk-border-secondary-base hover:msk-text-secondary-shadow hover:msk-border-secondary-shadow";
  if (size === "medium") mode += " msk-px-10 msk-py-3 msk-text-xl";
  if (size === "small") mode += " msk-px-6 msk-py-2 msk-text-sm";

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
