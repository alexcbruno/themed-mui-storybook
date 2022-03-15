import React from "react";
import { Switch as Component } from "@nextui-org/react";

export default {
  title: "Next UI/Switch",
  component: Component,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    squared: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["sm", "md"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
};

const Template = (args) => <Component {...args} />;
export const Switch = Template.bind({});

Switch.args = {
  checked: true,
  disabled: false,
  squared: false,
  bordered: false,
  size: "md",
};
