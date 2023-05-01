import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        );
      })}
    </>
  );
}
export default TodoList