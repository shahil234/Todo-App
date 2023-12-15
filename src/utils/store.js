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
        return item;
      });
    },
    deleteTodoItem: (state, action) => {
      state.todoList = state.todoList.filter((item) => {
        return item.id !== action.payload.id;
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

const showTodoFormSlice = createSlice({
    name: "todoForm",
    initialState: {show: false, isUpdateForm: false},
    reducers: {
        toggleShowTodoForm: (state) =>{
            state.show = !state.show;
        }
    }
})


export const { addTodoItem, updateTodoItem, deleteTodoItem } =
  todoSlice.actions;
export const { updateCategory } = categorySlice.actions;
export const {toggleShowTodoForm} = showTodoFormSlice.actions;
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    category: categorySlice.reducer,
    showTodoForm: showTodoFormSlice.reducer,
  },
});
