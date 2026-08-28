import { createContext,useContext } from "react";
import React from 'react';
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"DSA",
            completed:false
        }
    ],
    deleteTodo:(id)=>{},
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
});


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider;