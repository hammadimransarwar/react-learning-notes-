import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo' 
function App() {
  return (
    <div className="min-h-screen bg-white py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Learn about react redux toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App