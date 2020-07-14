import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={"/edit/" + id}>Edit</Link>
    <p>{description}</p>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
