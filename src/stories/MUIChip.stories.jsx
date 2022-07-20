import React from "react";
import Chip from "@mui/material/Chip";

export default {
  title: "Material UI/Chip",
  component: Chip,
  argTypes: {
    variant: {
      control: { type: "select", options: ["filled", "outlined"] },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium"] },
    },
    disabled: { control: "boolean" },
    clickable: { control: "boolean" },
  },
};

const Template = (args) => <Chip {...args} />;
export const MuiChip = Template.bind({});

MuiChip.args = {
  label: "Chip",
  variant: "filled",
  color: "primary",
  clickable: true,
  disabled: false,
  onDelete: false,
};
