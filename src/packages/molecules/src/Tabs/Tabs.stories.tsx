import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Tabs, { TabsProps } from "./index";

export default {
  title: "Molecules/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

const defaultArgs = {
  tabs: ["Tab 1", "Tab 2", "Tab 2"],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
