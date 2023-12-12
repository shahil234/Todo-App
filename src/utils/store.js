import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}
const initialFormState = {show: false};
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodoItem: (state,action) => {
            state.todoList.push(action.payload);
        },
        removeTodoItem: (state,action) => {
            state.todoList = state.todoList.filter((todoItem) =>{
                return todoItem.id !== action.payload.id
            })
        },
        updateTodoItem: (state,action) => {
            const updatedTodoList = state.todoList.map((todoItem) => {
                if(todoItem.id === action.payload.id){
                    return {...todoItem, text: action.payload.text}
                } 
                return todoItem;
            });
            state.todoList = updatedTodoList
        }
    }
});

const todoForm = createSlice({
    name: "todoForm",
    initialState: initialFormState,
    reducers: {
        updateShowTodoForm: (state,action) =>{
            state.show = action.payload
        }
    }
})

const updateTodoSlice = createSlice({
    name: "isUpdating",
    initialState: {isUpdating: false,todoId:""},
    reducers:{
        updating: (state,action) =>{
            state.isUpdating = action.payload.isUpdating;
            state.todoId = action.payload.todoId;
        },
    }
});

const categorySlice = createSlice({
    name: "category",
    initialState: {todoCategory: "All"},
    reducers: {
        updateCategory: (state,action) =>{
            state.todoCategory = action.payload
        }
    }
})

export const { addTodoItem, removeTodoItem,updateTodoItem} = todoSlice.actions;
export const {updateShowTodoForm} = todoForm.actions;
export const {updating} = updateTodoSlice.actions;
export const { updateCategory } = categorySlice.actions;
export const todoStore = configureStore({
    reducer:{
        todo: todoSlice.reducer,
        form: todoForm.reducer,
        update: updateTodoSlice.reducer,
        category: categorySlice.reducer
    }
})
