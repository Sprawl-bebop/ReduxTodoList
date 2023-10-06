import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//         todoList:[],
//         completedList:[],
//         task: '',
// }

const TodoSlice = createSlice({
    name: 'todo',
    initialState:{
        todoList:[],
        completedList:[],
        task: '',
    },
    reducers: {
        addTodo: (state, payload) => {
            // console.log('payload',payload)
            state.todoList = [payload.payload, ...state.todoList];
            // console.log('state todolist',state.todoList)
        },
        removeTodo: (state, payload) => {
            // console.log('remove item',payload);
            let removedList = state.todoList.filter((item) => item!= payload.payload);
            state.todoList = removedList;
        },
        completeTask: (state, payload) => {
            state.completedList = [payload.payload, ...state.completedList];
        },
        setTask: (state, payload)=>{
            state.task = payload.payload;
        },
    },
});


export const { addTodo, removeTodo, completeTask, setTask } = TodoSlice.actions;

export default TodoSlice.reducer;
