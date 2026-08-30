import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:1,
        text:"Hello"
    }]
}
export const TodoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!=action.payload))
        }
    } 
})
export const { addtodo, removetodo } = TodoSlice.actions;
export default TodoSlice.reducer;