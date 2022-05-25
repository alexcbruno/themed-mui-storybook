import React from "react";
import Component from "@atlaskit/pagination";
import "@atlaskit/css-reset";

export default {
  title: "Atlaskit/Pagination",
  component: Component,
  argTypes: {
    defaultSelectedIndex: { control: "number" },
    pages: { control: "array" },
  },
};

const Template = (args) => <Component {...args} />;
export const Pagination = Template.bind({});

Pagination.args = {
  defaultSelectedIndex: 1,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};
