import React from "react";
import Radio from "@mui/material/Radio";

export default {
  title: "Material UI/Radio",
  component: Radio,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <Radio {...args} />;
export const Radio = Template.bind({});

Radio.args = {
  checked: true,
  disabled: false,
};
