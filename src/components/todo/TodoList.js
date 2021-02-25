import React from "react";
import TodoTask from "./TodoTask";

export default function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <ul>
      {todos.map((task) => (
        <TodoTask key={task._id} task={task} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </ul>
  );
}
