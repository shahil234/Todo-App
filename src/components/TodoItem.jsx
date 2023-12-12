import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeTodoItem, updateShowTodoForm, updating } from '../utils/store';
function TodoItem({status, text,id}) {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(status); 

  const handleRemoveTodo = (id) =>{
    console.log("clicked")
    dispatch(removeTodoItem({id}))
  }
  return (
    <div className='flex flex-row items-center md:px-4 md:py-2 px-2 py-1 space-x-0 bg-white'>
      <section className='flex w-[90%] justify-start space-x-2'>
        <div className='flex items-center justify-center'>
            <input defaultChecked={isCompleted} onChange={() => setIsCompleted(!isCompleted)} type="checkbox" className='w-7 h-7 ' />
        </div>
        <p className={`${ isCompleted && "line-through"} font-medium text-[#646681] w-[80%] `}>{text.slice(0,50)}</p>
      </section>
      <section className='flex justify-start items-center space-x-2'>
            <div className='w-7 h-7 text-xl text-[#585858] bg-[#EEEEEE] flex items-center justify-center cursor-pointer rounded-sm' 
              onClick={() => handleRemoveTodo(id)}
            ><FaTrash /></div>
            <div className='w-7 h-7 text-xl text-[#585858] bg-[#EEEEEE] flex items-center justify-center cursor-pointer rounded-sm' 
              onClick={() => {
                dispatch(updateShowTodoForm(true));
                dispatch(updating({isUpdating: true,todoId: id }))
              }}
            ><MdModeEdit /></div>
      </section>
    </div>
  )
}

export default TodoItem
