import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { useDispatch, useSelector } from 'react-redux'
import { updateShowTodoForm,updateCategory } from '../utils/store';
function Header() {
  const showTodoForm = useSelector((state) => state.form.show);
  const category = useSelector((state) => state.category.todoCategory)
  const dispatch = useDispatch();
  console.log(category)
  const handleCategoryChange = (event) => {
    dispatch(updateCategory(event.target.value))
  }
  return (
    <section className='flex justify-between items-center w-full'>
      {showTodoForm && <TodoForm />}
      <div>
        <button onClick={() => dispatch(updateShowTodoForm(true))} className='font-bold text-white bg-[#646FF0] px-4 py-2 rounded-md '>Add Task</button>
      </div>
      <div className=''>
        <select className='bg-[#CCCDDE] text-center text-[#ccdde] font-semibold px-4 py-2 ' onChange={handleCategoryChange} name="todo-type" id="type">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </section>
  )
}

export default Header
