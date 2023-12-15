import React, { useId, useReducer, useState } from "react";
import { updateTodoItem, toggleShowTodoForm } from "../utils/store.js";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
function UpdateForm() {
  const { showUpdateForm: {id} } = useSelector((state) => state.showTodoForm);
  const [newTodoText, setNewTodoText] = useState("");
  const [newStatus, setNewStatus] = useState(false);
  const dispatch = useDispatch();
  const handleUpdateFormClose = () => {
    dispatch(toggleShowTodoForm({ showTodoForm: false, showUpdateForm: true }));
  };
  const handleTodoUpdate = () => {
      const newTodoItem = {
          id,
          text: newTodoText,
          isCompleted: newStatus,
        };
        console.log("updated", newTodoItem)

    dispatch(updateTodoItem(newTodoItem));
    dispatch(toggleShowTodoForm({showTodoForm: false, showUpdateForm: {show:false, id: null}}))
  };
  const handleStatus = (event) => {
    setNewStatus(event.target.value === "F" ? false : true);
  };
  const handleTodoTextChange = (event) => {
    setNewTodoText(event.target.value);
  };
  return (
    <div className="absolute top-0 left-0 h-screen w-full p-4 bg-[#7C7C7F] opacity- flex items-center justify-center ">
      <div className="w-full h-80 relative md:max-w-xl md:w-[30%] md:px-4 bg-[#ECEDF6] rounded-md opacity-100 px-2 py-4 ">
        <div className="w-full relative h-full ">
          <h1 className="font-xl font-bold text-[#7C7C7F]">UPDATE TODO</h1>
          <div className="flex flex-col">
            <label htmlFor="input-todo">New Title</label>
            <input
              onChange={handleTodoTextChange}
              type="text"
              id="input-todo"
              className="w-full md:w-[80%] outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="status-todo">New Status</label>
            <select
              onChange={handleStatus}
              name="status"
              id="status-todo"
              className="w-full md:w-[80%] h-10"
            >
              <option value={"F"}>Incomplete</option>
              <option value={"T"}>Completed</option>
            </select>
          </div>
          <div className="absolute bottom-0 left-0 flex items-center space-x-2">
            <button
              onClick={handleTodoUpdate}
              className="bg-[#646FF0] text-white font-medium rounded-md py-2 px-4"
            >
              Update Task
            </button>
            <button
              onClick={handleUpdateFormClose}
              className="bg-[#CCCDDE] text-[#7C7C7F] font-medium py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
        <button className="absolute top-[-50px] right-0 w-10 h-10 bg-white text-black text-4xl flex items-center justify-center rounded-md hover:bg-[#E32525] hover:text-white hover:duration-500">
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;
