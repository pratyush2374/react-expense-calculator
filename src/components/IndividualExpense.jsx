import { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import { RiEdit2Line, RiDeleteBin7Line } from "react-icons/ri";

const IndividualExpense = ({ item, editExpense,  deleteExpense}) => {
  
  return (
    <>
      <>
        <div className="expenses">
          <p className="iExpenseName">{item.name}</p>
          <p className="iExpense">{item.expense}</p>
        </div>
        <div className="icon-container">
          <RiEdit2Line className="edit" onClick={() => editExpense(item)} />
          <RiDeleteBin7Line
            className="delete"
            onClick={() => deleteExpense(item.id)}
          />
        </div>
      </>
    </>
  );
};

export default IndividualExpense;
