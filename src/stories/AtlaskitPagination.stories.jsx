import React from "react";
import Pagination from "@atlaskit/pagination";
import "@atlaskit/css-reset";

export default {
  title: "Atlaskit/Pagination",
  component: Pagination,
  argTypes: {
    defaultSelectedIndex: { control: "number" },
    pages: { control: "array" },
  },
};

const Template = (args) => <Pagination {...args} />;
export const PaginationComponent = Template.bind({});

PaginationComponent.args = {
  defaultSelectedIndex: 1,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};
