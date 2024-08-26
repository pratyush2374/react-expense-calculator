import { createContext, useEffect, useReducer, useRef, useState } from "react";

export const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      let currEx = {
        id: Date.now(),
        name: action.payload.name,
        expense: action.payload.expense,
      };
      return [currEx, ...state];

    case "DELETE_EXPENSE":
      return state.filter((item) => item.id !== action.payload.id);

    case "SAVE_CHANGES":
      return state.map((obj) =>
        obj.id === action.payload.oldId
          ? {
              ...obj,
              id : action.payload.oldId,
              name: action.payload.item.name,
              expense: action.payload.item.expense,
            }
          : obj
      );

    default:
      return state;
  }
};
const expenseArray = [];
const ExpenseContextProvider = ({ children }) => {
  const [totalExpense, setTotalExpenses] = useState(0);
  const [expenseList, dispatchAction] = useReducer(
    expenseReducer,
    expenseArray
  );

  useEffect(() => {
    const total = expenseList.reduce(
      (acc, curr) => Number(acc + curr.expense),
      0
    );
    setTotalExpenses(total);
  }, [expenseList]);

  const addExpense = (event, name, expense) => {
    event.preventDefault();
    let exNum = parseFloat(expense);
    dispatchAction({
      type: "ADD_EXPENSE",
      payload: {
        name,
        expense: exNum,
      },
    });
  };

  const deleteExpense = (id) => {
    dispatchAction({
      type: "DELETE_EXPENSE",
      payload: {
        id,
      },
    });
  };

  const saveChanges = (item, oldId) => {
    dispatchAction({
      type: "SAVE_CHANGES",
      payload: {
        item,
        oldId,
      },
    });
  };
  return (
    <>
      <ExpenseContext.Provider
        value={{
          expenseList,
          addExpense,
          deleteExpense,
          totalExpense,
          saveChanges,
        }}
      >
        {children}
      </ExpenseContext.Provider>
    </>
  );
};

export default ExpenseContextProvider;
