import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World", completed: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },

        updateTodo: (state, action) => {
            const todo = state.todos.find((todo)=> todo.id === action.payload.id)
            todo.text = action.payload.text
        },

        checkTodo: (state, action) => {
            state.todos.map((todo)=> {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo, checkTodo} = todoSlice.actions

export default todoSlice.reducer