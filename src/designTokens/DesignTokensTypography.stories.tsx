import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DesignTokensTypography from "./DesignTokensTypography";

const Template: Story<any> = () => <DesignTokensTypography />;

export const Typography = Template.bind({});

export default {
  title: "Design Tokens/Typography",
  component: DesignTokensTypography,
} as Meta;
