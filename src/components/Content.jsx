import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { updateCategory } from "../utils/store.js";
function Content() {
  const todoList = useSelector((state) => state.todo.todoList);
  const {category : displayCategory} = useSelector((state) => state.category);
  return (
    <section className="w-full bg-[#ECEDF6] min-h-[40px] max-h-[90vh] rounded-lg md:px-8 md:py-4 px-1 py-1 flex flex-col justify-start space-y-2 ">
      {
        displayCategory === 'all' && (
          todoList.map((item,index) => (
            <TodoItem key={index} id={item.id} status={item.isCompleted} text={item.text} />
          ))
        )
      }
      {
        displayCategory === "completed" && (
          todoList.map((item,index) =>{
            if(item.isCompleted){
              return <TodoItem key={index} id={item.id} status={item.isCompleted} text={item.text} />
            }
          })
        )
      }
      {
        displayCategory === "incomplete" && (
          todoList.map((item,index) =>{
            if(!item.isCompleted){
              return <TodoItem key={index} id={item.id} status={item.isCompleted} text={item.text} />
            }
          })
        )
      }
    </section>
  );
}

export default Content;

// <TodoItem key={item.id} id={item.id} status={item.completed} text={item.text} />
