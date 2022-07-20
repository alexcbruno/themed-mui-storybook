import React from "react";
import { Button } from "@nextui-org/react";

export default {
  title: "Next UI/Button",
  component: Button,
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
        options: ["primary", "secondary"],
      },
    },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;
export const NextUiButton = Template.bind({});

NextUiButton.args = {
  disabled: false,
  rounded: false,
  bordered: false,
  flat: false,
  auto: true,
  size: "md",
  label: "Button",
};
