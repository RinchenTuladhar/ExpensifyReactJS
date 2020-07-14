import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("it should add expense", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "Last month rent",
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("it should add expense with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
    type: "ADD_EXPENSE",
  });
});

test("it should remove expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("it should edit expense", () => {
  const expense = {
    note: "Test",
  };
  const action = editExpense("123abc", expense);

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: expense,
  });
});
