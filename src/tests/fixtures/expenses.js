import moment from "moment";

export default [
  {
    id: "1",
    description: "Bum bag",
    note: "",
    amount: 2500,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Duffle bag",
    note: "",
    amount: 5000,
    createdAt: moment(0).add(1, "days").valueOf(),
  },
  {
    id: "3",
    description: "Backpack",
    note: "",
    amount: 4000,
    createdAt: moment(0).add(2, "days").valueOf(),
  },
];
