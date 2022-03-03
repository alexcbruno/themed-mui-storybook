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
    light: { control: "boolean" },
    auto: { control: "boolean", name: "auto width" },
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

const Template = (args) => <Component {...args}>{args.label}</Component>;
export const Button = Template.bind({});

Button.args = {
  disabled: false,
  rounded: false,
  bordered: false,
  flat: false,
  light: false,
  auto: true,
  size: "md",
  label: "text",
};
