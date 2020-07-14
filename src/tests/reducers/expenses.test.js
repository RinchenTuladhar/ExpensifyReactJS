import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "5",
      description: "Walleto",
      note: "Leather walleto",
      amount: 4000,
      createdAt: 0,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

// should edit an expense
test("should edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount: 101010,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(101010);
});

// should not edit expense if expense not found
test("should not expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      amount: 101010,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
