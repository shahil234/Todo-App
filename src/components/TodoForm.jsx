import React, { useId, useReducer, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {addTodoItem} from "../utils/store";
import { useSelector,useDispatch } from "react-redux";
function TodoForm({ showTodoForm, setShowTodoForm }) {
  const dispatch = useDispatch();
  const todoListLength = useSelector((state) => state.todo.todoList.length); //to access todolist's length
  const [todoText, setTodoText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const handleFormClose = () => {
    setShowTodoForm((prevState) => !prevState);
  };

  const handleAddBtnClick = () =>{
    const todoItem = {
      id: todoListLength + 1,
      text: todoText,
      isCompleted
    }
    dispatch(addTodoItem(todoItem));
    setShowTodoForm(prevState => !prevState);
  }

  return (
    <div className="absolute top-0 left-0 h-screen w-full p-4 bg-[#7C7C7F] opacity- flex items-center justify-center ">
      <div className="w-full h-80 relative md:max-w-xl md:w-[30%] md:px-4 bg-[#ECEDF6] rounded-md opacity-100 px-2 py-4 ">
        <div className="w-full relative h-full ">
          <h1 className="font-xl font-bold text-[#7C7C7F]">ADD TODO</h1>
          <div className="flex flex-col">
            <label htmlFor="input-todo">Title</label>
            <input
              onChange={(e) => setTodoText(e.target.value)}
              type="text"
              id="input-todo"
              className="w-full md:w-[80%] outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="status-todo">Status</label>
            <select
              onChange={(e) =>
                setIsCompleted(e.target.value === "F" ? false : true)
              }
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
              onClick={handleAddBtnClick}
            className="bg-[#646FF0] text-white font-medium rounded-md py-2 px-4">
              Add Task
            </button>
            <button
              onClick={handleFormClose}
              className="bg-[#CCCDDE] text-[#7C7C7F] font-medium py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
        <button
          className="absolute top-[-50px] right-0 w-10 h-10 bg-white text-black text-4xl flex items-center justify-center rounded-md hover:bg-[#E32525] hover:text-white hover:duration-500"
          onClick={handleFormClose}
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
