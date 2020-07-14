import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

// Refactor EditExpensePage to be a class based component

class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.dispatch(removeExpense({ id: this.props.expense.id }));
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps)(EditExpensePage);
