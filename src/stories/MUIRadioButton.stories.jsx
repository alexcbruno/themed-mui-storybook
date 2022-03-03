import React from "react";
import { default as Component } from "@mui/material/Radio";

export default {
  title: "Material UI/Radio",
  component: Component,
  argTypes: {
    checked: { control: "boolean" },
  },
};

const Template = (args) => <Component {...args} />;
export const Radio = Template.bind({});

Radio.args = {
  checked: true,
};
