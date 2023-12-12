import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import {useDispatch, useSelector} from "react-redux";
import { addTodoItem, updateShowTodoForm,updating,updateTodoItem } from '../utils/store'; 
function TodoForm() {
  const dispatch = useDispatch();
  const showTodoForm = useSelector((state) => state.form.show);
  const todoListLength = useSelector((state) => state.todo.todoList.length);
  const updateStatus = useSelector((state) => state.update);
  const [todoText, setTodoText] = useState("");
  const [todoStatus, setTodoStatus] = useState("Incomplete");
  const handleTodoText = (event) =>{
    setTodoText(event.target.value)
  }
  const handleTodoStatus = (event) =>{
    setTodoStatus(event.target.value)
  }
  const addTodoItemToList = () =>{
    const todoItem = {
      id: todoListLength + 1,
      text: todoText,
      completed: todoStatus === "Completed" ? true : false
    }
    if(updateStatus.isUpdating){
      dispatch(updateTodoItem({id: updateStatus.todoId,text: todoItem.text,completed: todoItem.completed}));
      dispatch(updating({isUpdating: false, id: ""}));
      dispatch(updateShowTodoForm(false))
    } else{
      todoText !== "" && dispatch(addTodoItem(todoItem));
      setTodoStatus("Incomplete");
      setTodoText("");
      dispatch(updateShowTodoForm(false))
    }
  }
  return (
    <div className='absolute top-0 left-0 h-screen w-full p-4 bg-[#7C7C7F] opacity- flex items-center justify-center '>
        <div className='w-full h-80 relative md:max-w-xl md:w-[30%] md:px-4 bg-[#ECEDF6] rounded-md opacity-100 px-2 py-4 '>
            <div className='w-full relative h-full '>
              <h1 className='font-xl font-bold text-[#7C7C7F]'>ADD TODO</h1>
              <div className='flex flex-col'>
                <label htmlFor="input-todo">Title</label>
                <input onChange={handleTodoText} value={todoText} type="text" id='input-todo' className='w-full md:w-[80%] outline-none p-2' />
              </div>
              <div className='flex flex-col '>
                <label htmlFor="status-todo">Status</label>
                <select onChange={handleTodoStatus}  name="status" id="status-todo" className='w-full md:w-[80%] h-10'>
                  <option value="Incomplete">Incomplete</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className='absolute bottom-0 left-0 flex items-center space-x-2'>
                  <button className='bg-[#646FF0] text-white font-medium rounded-md py-2 px-4' onClick={addTodoItemToList}>Add Task</button>
                  <button onClick={() => dispatch(updateShowTodoForm(false))} className='bg-[#CCCDDE] text-[#7C7C7F] font-medium py-2 px-4 rounded-md'>Cancel</button>
              </div>
            </div>
            <button onClick={() =>dispatch(updateShowTodoForm(false))} className='absolute top-[-50px] right-0 w-10 h-10 bg-white text-black text-4xl flex items-center justify-center rounded-md hover:bg-[#E32525] hover:text-white hover:duration-500' ><RxCross2 /></button>
        </div>
    </div>
  )
}

export default TodoForm
