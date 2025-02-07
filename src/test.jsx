import React, { useState } from 'react'

function test() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: inputText,
        completed: false
      }])
      setInputText('')
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className='w-full min-h-screen flex p-10 flex-col items-center bg-gray-900 text-white'>
      <div className='w-96 text-center flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg shadow-zinc-900/50 [box-shadow:inset_0_2px_4px_0_rgba(0,0,0,0.3)]'>
        <h1 className='text-2xl font-bold tracking-wider uppercase bg-gradient-to-br to-purple-500 from-cyan-400 text-transparent bg-clip-text mb-4'>
          Todo list
        </h1>
        
        <div className='w-full flex gap-2'>
          <input 
            type="text"
            placeholder='Add a new task...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            className='w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-0 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 bg-gray-700'
          />
          <button
            onClick={addTodo}
            className='px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300'
          >
            Add
          </button>
        </div>

        <ul className='w-full flex flex-col mt-4 space-y-2'>
          {todos.map(todo => (
            <li 
              key={todo.id}
              className='flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg group'
            >
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`w-5 h-5 flex items-center justify-center rounded border-2 
                    ${todo.completed ? 
                      'bg-green-500 border-green-500' : 
                      'border-gray-400 hover:border-cyan-400'}`}
                >
                  {todo.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => removeTodo(todo.id)}
                className='text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default test