import React from "react";
import { Checkbox as Component } from "@nextui-org/react";

export default {
  title: "Next UI/Checkbox",
  component: Component,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
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
export const Checkbox = Template.bind({});

Checkbox.args = {
  checked: true,
  disabled: false,
  color: "primary",
  size: "md",
};
