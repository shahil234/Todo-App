import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { updateCategory, toggleShowTodoForm } from "../utils/store.js";
import { useDispatch, useSelector } from 'react-redux';
import UpdateForm from './UpdateForm.jsx';
function Header() {
  const dispatch = useDispatch();
  const {showTodoForm: showForm} = useSelector(state => state.showTodoForm);
  const {showUpdateForm : {show : showUpdateForm}} = useSelector(state => state.showTodoForm);
  const handleShowTodoForm = () =>{
    dispatch(toggleShowTodoForm({showTodoForm: true, showUpdateForm: { show: false, id: null}}));
  }
  const handleCategoryChange = (event) =>{
    dispatch(updateCategory({category: event.target.value.toLowerCase()}))
  }
  return (
    <section className='flex justify-between items-center w-full'>
      {showForm && <TodoForm  /> || showUpdateForm && <UpdateForm /> }
      <div>
        <button onClick={handleShowTodoForm} className='font-bold text-white bg-[#646FF0] px-4 py-2 rounded-md '>Add Task</button>
      </div>
      <div className=''>
        <select className='bg-[#CCCDDE] text-center text-[#ccdde] font-semibold px-4 py-2 ' onChange={handleCategoryChange}  name="todo-type" id="type">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </section>
  )
}

export default Header
