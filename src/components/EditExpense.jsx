import { useContext, useRef, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import IndividualExpense from "./IndividualExpense";

const EditExpense = ({ editExp, editName, id, editExpense, setEditId }) => {
  const editedName = useRef();
  const editedExpense = useRef();
  const [doneEditing, setDoneEditing] = useState(false);
  const { deleteExpense } = useContext(ExpenseContext);

  const { saveChanges, expenseList } = useContext(ExpenseContext);

  const [finalEditedItem, setFinalEditedItem] = useState(expenseList);

  const handleChanges = (event) => {
    event.preventDefault();
    let currItem = {
      id: id,
      name: editedName.current.value,
      expense: Number(editedExpense.current.value),
    };
    setEditId(0);
    saveChanges(currItem, id);
    setFinalEditedItem(currItem);
    setDoneEditing(true);
  };

  const cancel = () => {
    const temp = expenseList.find((obj) => obj.id === id);
    setFinalEditedItem(temp);
    setDoneEditing(true);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const changeDone = () => {
    setIsDisabled(false);
  };

  return (
    <>
      {doneEditing ? (
        <IndividualExpense
          item={finalEditedItem}
          editExpense={editExpense}
          deleteExpense={deleteExpense}
        />
      ) : (
        <form className="editForm" onSubmit={handleChanges}>
          <input
            type="text"
            name="editName"
            id="editName"
            className="editName"
            defaultValue={editName}
            onChange={changeDone}
            ref={editedName}
          />
          <input
            type="number"
            name="editExpense"
            id="editExpense"
            className="editExpense"
            defaultValue={editExp}
            ref={editedExpense}
            onChange={changeDone}
          />
          <input
            type="submit"
            value="Save"
            className="save"
            disabled={isDisabled}
          />
          <input
            type="button"
            value="Cancel"
            className="cancel"
            onClick={cancel}
          />
        </form>
      )}
    </>
  );
};

export default EditExpense;
