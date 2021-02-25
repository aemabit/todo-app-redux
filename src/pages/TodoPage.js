import React, { useEffect } from "react";
import { connect } from "react-redux";
import { EatLoading } from "react-loadingg";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import {
  loadUserTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../redux/actions/todoActions";

const TodoPage = ({ loadUserTodos, addTodo, updateTodo, deleteTodo, todo }) => {
  useEffect(() => {
    loadUserTodos()
  }, [loadUserTodos]);

  return (
    <div className="wrapper-body">
      <h1>To do list </h1>
      <TodoForm addTodo={addTodo} />
      {todo.isLoading ? (
        <EatLoading style={{ position: "relative" }} />
      ) : (
        <TodoList
          todos={todo.todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  loadUserTodos,
  addTodo,
  deleteTodo,
  updateTodo,
})(TodoPage);
