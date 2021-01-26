import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Typography, TypographyProps } from "./index";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as Meta;

const children =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit enim ut metus feugiat, vitae pharetra massa aliquet.";

const Template: Story<TypographyProps> = (args) => {
  return (
    <React.Fragment>
      <h3>
        <b>{args.variant}</b>
      </h3>
      <Typography {...args} children={children} />
    </React.Fragment>
  );
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "heading1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "heading2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "heading3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: "heading4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: "heading5",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: "subtitle",
};

export const Body = Template.bind({});
Body.args = {
  variant: "body",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
};
