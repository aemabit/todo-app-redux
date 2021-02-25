import React, { useState } from "react";

export default function TodoTask({ task, updateTodo, deleteTodo }) {
  const [toggleInput, setToggleInput] = useState(false);

  const [todo, setTodo] = useState(task);

  const handleChange = (e) => {
    const task = e.target.value;
    setTodo({
      ...todo,
      task,
    });
  };

  const handleTodo = (task) => {
    updateTodo({
      id: task._id,
      task: task.task,
      complete: task.complete,
    });
  };

  return (
    <li key={task._id}>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTodo({ id: task._id });
        }}
      >
        x
      </button>
      <input
        className="check-input"
        type="checkbox"
        checked={task.complete}
        onChange={() => handleTodo({ ...task, complete: !task.complete })}
      />

      {toggleInput ? (
        <div className="wrapper-task-input">
          <input type="text" onChange={handleChange} value={todo.task} />
          <button className="save-btn"onClick={() => handleTodo(todo)}>Save</button>
        </div>
      ) : (
        <span onClick={() => setToggleInput(!toggleInput)}>{task.task}</span>
      )}
    </li>
  );
}
