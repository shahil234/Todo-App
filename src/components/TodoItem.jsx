import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateTodoItem, deleteTodoItem} from "../utils/store.js";


function TodoItem({ status, text, id }) {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(status);

  const handleRemoveTodo = () => {
    dispatch(deleteTodoItem({ id }));
  };
  return (
    <div className="flex flex-row items-center md:px-4 md:py-2 px-2 py-1 space-x-0 bg-white">
      <section className="flex w-[90%] justify-start space-x-2">
        <div className="flex items-center justify-center">
          <input
            defaultChecked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
            type="checkbox"
            className="w-7 h-7 "
          />
        </div>
        <p
          className={`${
            isCompleted && "line-through"
          } font-medium text-[#646681] w-[80%] `}
        >
          {text.slice(0, 40)}
        </p>
      </section>
      <section className="flex justify-start items-center space-x-2">
        <div
          className="w-7 h-7 text-xl text-[#585858] bg-[#EEEEEE] flex items-center justify-center cursor-pointer rounded-sm"
          onClick={() => handleRemoveTodo()}
        >
          <FaTrash />
        </div>
        <div className="w-7 h-7 text-xl text-[#585858] bg-[#EEEEEE] flex items-center justify-center cursor-pointer rounded-sm">
          <MdModeEdit />
        </div>
      </section>
    </div>
  );
}

export default TodoItem;
