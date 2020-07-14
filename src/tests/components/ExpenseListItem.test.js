import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
const item = {
  id: 1,
  description: "Duffle bag",
  amount: "10",
  createdAt: 0,
};

test("should render ExpenseListItem", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
