import { useContext, useRef } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const ExpenseInput = () => {
  const name = useRef();
  const expense = useRef();
  const { addExpense } = useContext(ExpenseContext);

  const handleAdd = (event) => {
    addExpense(event, name.current.value, expense.current.value);
    name.current.value = "";
    expense.current.value = "";
  };
  return (
    <form className="formExpenseInput" onSubmit={handleAdd}>
      <input
        type="text"
        name="expenseName"
        id="expenseName"
        className="expenseName"
        placeholder="Enter expense name (e.g. Grocery, Rent)"
        ref={name}
        required
      />
      <input
        type="number"
        name="expense"
        id="expense"
        placeholder="Enter amount (e.g. 1000)"
        className="expense"
        ref={expense}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default ExpenseInput;
