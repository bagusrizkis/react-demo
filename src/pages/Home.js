/**
 * @useState 
 * merupakan sebuah Hook, dan mengembalikan nilai
 * disertai function yang digunakan untuk mengubah
 * nilai dari statenya.
 * 
 * @namaState => untuk mengakses isi state
 * @setNamaState => function
 * const [namaState, setNamaState] = useState([])
 * 
 */

import { useState } from 'react'


function Home () {
  const [todos, setTodos] = useState(['Makan', 'Tidur'])
  const [inputUser, setInputUser] = useState('')
  
  const addTodoHandler = () => {
    // event.preventDefault();
    // console.log(event.target.todo.value)
    setTodos([...todos, inputUser])
    setInputUser('')
  }

  const removeAllHandler = () => {
    setTodos([])
  }

  return (
    <div>
      {/* input form add todo */}
      <form onSubmit={e => e.preventDefault()}>
        <input className='input-todo' type="text" name='todo' value={inputUser} onChange={
          ({target}) => setInputUser(target.value)
        }/>
        <button className='btn' onClick={addTodoHandler} >Add Todo</button>
        <button className='btn' onClick={removeAllHandler} >Delete All</button>
      </form>
      {/* Nampilin Todo yang sudah di add */}
      <ul>
        {
          todos.map((todo, index) => (
            <li
              className='todo-list'
              key={index}
            >{todo}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home