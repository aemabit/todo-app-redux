import React from "react";

export default function TodoForm({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    addTodo({
      task,
    });
    e.target.task.value = "";
  };

  return (
    <form className="wrapper-input" onSubmit={handleSubmit}>
      <input type="text" name="task" />
      <button className="submit-btn" type="submit">
        Add To do
      </button>
    </form>
  );
}
