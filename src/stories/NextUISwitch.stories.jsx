import React from "react";
import { Switch as Component } from "@nextui-org/react";

export default {
  title: "Next UI/Switch",
  component: Component,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    squared: { control: "boolean" },
    bordered: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "error"],
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
