import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 } from "uuid"
import { addTodo, deleteAll } from "../store/todo/todoSlice"
import TodoList from "./TodoList"
import Header from "./Header"

const TodoForm = () => {
  const dispatch = useDispatch()

  const { todo } = useSelector((state) => state)

  const [inputValue, setInputValue] = useState("")

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newTodo = {
      title: inputValue,
      id: v4(),
      completed: false,
    }
    dispatch(addTodo(newTodo))
    setInputValue("")
  }

  const deleteAllTodo = () => {
    dispatch(deleteAll())
  }

  return (
    <div>
      <Header />
      <form onSubmit={submitHandler}>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button type="submit" disabled={!inputValue}>
          Add
        </button>
      </form>
      <button onClick={deleteAllTodo}>delete All</button>
      <ul>
        {todo.map((item) => (
          <TodoList key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default TodoForm
