import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodoActions';

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => {
      return (todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo }
      )
    }))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deletedCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return <div className="App">
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodoHandler} />
    {!!todos.length &&
      <TodoActions
        completedTodosExsist = {!!completedTodosCount}
        resetTodos={resetTodosHandler}
        deletedCompletedTodos={deletedCompletedTodosHandler}
      />
    }
    <TodoList
      todos={todos}
      deleteTodo={deleteTodoHandler}
      toggleTodo={toggleTodoHandler}
    />
    {completedTodosCount > 0 && <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
  </div>
}

export default App;