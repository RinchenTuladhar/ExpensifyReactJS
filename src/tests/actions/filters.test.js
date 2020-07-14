import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should set text filter without any values", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should set text filter without some values", () => {
  const action = setTextFilter("Hello World");

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Hello World",
  });
});

test("it should sort by date with value", () => {
  const action = sortByDate(moment(0));

  expect(action).toEqual({
    type: "SORT_BY_DATE",
    date: moment(0),
  });
});

test("it should sort by amount with value", () => {
  const action = sortByAmount(500);

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    amount: 500,
  });
});
