import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpenseList = (props) => (
  <div>
    <p className="total-calculator">
      You have {props.expenses.length} expenses, totalling{" "}
      {numeral(expensesTotal(props.expenses)).format("$0,0.00")}
    </p>

    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const expensesTotal = (expenses) => {
  let total = 0;

  if (expenses.length > 0) {
    console.log(
      expenses.map((expense) => {
        total += expense.amount;
      })
    );
  }

  return total / 100;
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
