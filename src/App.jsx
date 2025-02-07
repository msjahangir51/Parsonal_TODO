import React, { useEffect, useState } from 'react'
import GetImogi from './utls/GetImogi';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodos = [...todos, {
      id: Date.now(),
      text: text,
      completed: false,
      imogi: GetImogi(text)
    }]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setText("")
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const toggleComplete = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) setTodos(todos);
  }, [])


  return (
    <div className='w-full min-h-screen py-8 md:p-8 bg-gray-900'>
      <div className=' w-full max-w-96 bg-gray-800 p-4 shadow-2xl shadow-white/10 rounded-md mx-auto'>


        <h1
          className='tracking-widest font-bold bg-linear-to-br to-purple-500 from-cyan-500 bg-clip-text text-transparent text-center text-2xl'
        >TODO LIST</h1>
        <div
          className='w-full flex gap-2 mt-4'
        >
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder='Add a new task...'
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none border-2 border-gray-600 focus:border-cyan-500 transition-colors duration-300'
            type="text"
          />
          <button
            onClick={addTodo}
            className='px-4 py-2 bg-gradient-to-br to-purple-500 from-cyan-500 rounded-md text-white hover:from-purple-500 hover:to-cyan-500 transition-colors duration-300 cursor-pointer'
          >Add</button>
        </div>

        <ul
          className='mt-4 flex flex-col items-start gap-2'
        >
          {
            todos && todos.map((todo) => {
              return (
                <li key={todo.id} className={`${todo.completed ? "bg-green-900" : "bg-gray-700"} w-full px-2 py-3 rounded-md text-white group flex justify-center`}>
                  <div className='w-full flex items-center gap-2'>
                    <span className='text-sm'>{todo.imogi}</span>
                    <span className={`text-sm ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className='cursor-pointer opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm'
                    >🚫</button>
                    <button
                      onClick={() => toggleComplete(todo.id)}
                      className='cursor-pointer opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm'
                    >❤️</button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App