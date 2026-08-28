import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './Context/TodoContext'
import TodoForm from './Components/Todoform'
import TodoItem from './Components/Todoitem'
function App() {
  const [todos,settodos]=useState([]);

  const addTodo=(todo)=>{
   settodos((p)=>[{id:Date.now(),...todo},...p])
  }

  const updateTodo=(id,todo)=>{
    settodos((p)=>p.map((preTodo)=>preTodo.id===id?todo:preTodo))
  }

  const deleteTodo=(id)=>{
    settodos((p)=>p.filter((Todo)=>Todo.id!==id))
  }
  
  const toggleComplete=(id)=>{
    settodos((pre)=>pre.map((p)=>p.id===id?{...p,completed:!p.completed}:p))
  }
  

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos&&todos.length>0){
      settodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,toggleComplete,addTodo,deleteTodo,updateTodo}}>
   <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
    </div>
    </TodoProvider>
  )
}

export default App
