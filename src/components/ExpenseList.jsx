import { useContext, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import EditExpense from "./EditExpense";
import IndividualExpense from "./IndividualExpense";

const ExpenseList = () => {
  const [editId, setEditId] = useState();
  const [editName, setEditName] = useState();
  const [editExp, setEditExp] = useState();

  const editExpense = (item) => {
    console.log(item.id);
    setEditId(item.id);
    setEditName(item.name);
    setEditExp(item.expense);
  };

  const { deleteExpense, expenseList, totalExpense} = useContext(ExpenseContext);


  return (
    <>
      <div className="addedExpenses">
        {expenseList.length === 0 ? (
          <p className="empty">There are no expenses to show</p>
        ) : (
          expenseList.map((item) => {
            return (
              <div className="individualExpense" key={item.id}>
                {editId === item.id ? (
                  <EditExpense
                    id={item.id}
                    editName={editName}
                    editExp={editExp}
                    editExpense={editExpense}
                    setEditId ={setEditId}
                  />
                ) : (
                  <IndividualExpense
                    item={item}
                    editExpense={editExpense}
                    deleteExpense={deleteExpense}
                  />
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="total">
        <p className="totalExpenses">Total Expenses : {totalExpense}</p>
      </div>
    </>
  );
};

export default ExpenseList;
