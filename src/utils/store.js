import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    updateTodoItem: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id;
          item.text = action.payload.text;
          item.isCompleted = action.payload.isCompleted;
        }
      });
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
export const { addTodoItem } = todoSlice.actions;
export const {updateCategory} = categorySlice.actions;
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    category: categorySlice.reducer
  },
});
