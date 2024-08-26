import ExpenseContextProvider from "../store/ExpenseContext.jsx";
import ExpenseInput from "./ExpenseInput";
import ExpenseList from "./ExpenseList";

const ExpenseTracker = () => {
  return (
    <ExpenseContextProvider>
      <div className="expenseOuter">
        <ExpenseInput />
        <ExpenseList />
      </div>
    </ExpenseContextProvider>
  );
};

export default ExpenseTracker;
