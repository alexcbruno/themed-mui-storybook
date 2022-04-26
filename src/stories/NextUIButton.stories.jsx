import React from "react";
import { Button as Component } from "@nextui-org/react";

export default {
  title: "Next UI/Button",
  component: Component,
  argTypes: {
    disabled: { control: "boolean" },
    rounded: { control: "boolean" },
    bordered: { control: "boolean" },
    flat: { control: "boolean" },
    auto: { control: "boolean", name: "auto width" },
    size: {
      control: {
        type: "select",
        options: ["xs", "md"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "error"],
      },
    },
  },
};

const Template = (args) => <Component {...args}>{args.label}</Component>;
export const Button = Template.bind({});

Button.args = {
  disabled: false,
  rounded: false,
  bordered: false,
  flat: false,
  auto: true,
  size: "md",
  label: "Button",
};
