import moment from "moment";
import selectExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
});

test("should filter by endDate", () => {
  // filter endDate
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
});

test("should sort by date", () => {
  // sort date
  const sort_values = {
    type: "SORT_BY_DATE",
    date: moment(0).valueOf(),
  };
});

test("should sort by amount", () => {
  // sort amount
});
