import React from "react";
import { default as Component } from "@mui/material/Switch";

export default {
  title: "Material UI/Switch",
  component: Component,
  argTypes: {
    checked: { control: "boolean" },
  },
};

const Template = (args) => <Component {...args} />;
export const Switch = Template.bind({});

Switch.args = {
  checked: true,
};
