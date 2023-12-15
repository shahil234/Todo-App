import { configureStore, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";


const getInitialTodoList = () =>{
    const todoList = window.localStorage.getItem("todoList");
    if(todoList){
        return JSON.parse(todoList);
    }
    return [];
}
const initialState = {
  todoList: getInitialTodoList()
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    updateTodoItem: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id;
          item.text = action.payload.text;
          item.isCompleted = action.payload.isCompleted;
        }
        return item;
      });
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    deleteTodoItem: (state, action) => {
      state.todoList = state.todoList.filter((item) => {
        return item.id !== action.payload.id;
      });
      window.localStorage.setItem("todoList",JSON.stringify(state.todoList));
    },
  },
});

const categorySlice = createSlice({
  name: "category",
  initialState: { category: "all" },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

const showTodoFormSlice = createSlice({
  name: "todoForm",
  initialState: {
    showTodoForm: false,
    showUpdateForm: { show: false, id: null },
  },
  reducers: {
    toggleShowTodoForm: (state, action) => {
      state.showTodoForm = action.payload.showTodoForm;
      state.showUpdateForm = action.payload.showUpdateForm;
    },
  },
});

export const { addTodoItem, updateTodoItem, deleteTodoItem } =
  todoSlice.actions;
export const { updateCategory } = categorySlice.actions;
export const { toggleShowTodoForm } = showTodoFormSlice.actions;
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    category: categorySlice.reducer,
    showTodoForm: showTodoFormSlice.reducer,
  },
});
