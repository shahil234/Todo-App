import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function Content() {
  const todoList = useSelector((state) => state.todo.todoList);
  const category = useSelector((state) => state.category.todoCategory);
  return (
    <section className="w-full bg-[#ECEDF6] min-h-[40px] max-h-[90vh] rounded-lg md:px-8 md:py-4 px-1 py-1 flex flex-col justify-start space-y-2 ">
      {category === "All" &&
        todoList.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              status={item.completed}
              text={item.text}
            />
          );
        })}
        {
          category === "Completed" &&
            todoList.map((item,index) =>{
              if(item.completed){
                return (
                  <TodoItem
                    key={item.id}
                    id={item.id}
                    status={item.completed}
                    text={item.text}
                  />
                );
              }
            })
        }
        {
          category === "Incomplete" &&
            todoList.map((item,index) =>{
              if(!item.completed){
                return (
                  <TodoItem
                    key={item.id}
                    id={item.id}
                    status={item.completed}
                    text={item.text}
                  />
                );
              }
            })
        }
    </section>
  );
}

export default Content;

// <TodoItem key={item.id} id={item.id} status={item.completed} text={item.text} />
