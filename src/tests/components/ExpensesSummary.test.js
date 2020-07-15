import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpenseSummary";

test("should correctly render expenses summary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expenses summary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={13} expensesTotal={2312315} />
  );
  expect(wrapper).toMatchSnapshot();
});
