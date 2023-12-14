import React, { useState } from 'react'
import TodoForm from './TodoForm';

function Header() {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [todoCategory, setTodoCategory] = useState("all");
  const handleCategoryChange = (event) =>{
    setTodoCategory(event.target.value.toLowerCase());
  }
  return (
    <section className='flex justify-between items-center w-full'>
      {showTodoForm && <TodoForm showTodoForm={showTodoForm} setShowTodoForm={setShowTodoForm} />}
      <div>
        <button onClick={() => setShowTodoForm(true)} className='font-bold text-white bg-[#646FF0] px-4 py-2 rounded-md '>Add Task</button>
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
