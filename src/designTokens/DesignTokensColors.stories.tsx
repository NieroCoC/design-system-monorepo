import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DesignTokensColors from "./DesignTokensColors";

const Template: Story<any> = () => <DesignTokensColors />;

export const Colors = Template.bind({});

export default {
  title: "Design Tokens/Colors",
  component: DesignTokensColors,
} as Meta;
