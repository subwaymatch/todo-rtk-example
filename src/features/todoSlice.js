import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: {
            reducer(state, action) {
                const { id, text } = action.payload;
                state.push({ id, text, completed: false });
            },
            prepare(text) {
                return {
                    payload: { text, id: nextTodoId++ },
                };
            },
        },
        toogleTodo(state, action) {
            const todo = state.find((todo) => todo.id === action.payload);

            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
