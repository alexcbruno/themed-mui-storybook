import React from "react";
import { Radio as Component } from "@nextui-org/react";

export default {
  title: "Next UI/Radio",
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
export const Radio = Template.bind({});

Radio.args = {
  checked: true,
  disabled: false,
  color: "primary",
  size: "md",
};
