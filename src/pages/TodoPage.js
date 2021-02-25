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
import { useHistory } from "react-router-dom";

const TodoPage = ({
  loadUserTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  todo,
  auth,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      history.push("/");
    } else {
      loadUserTodos();
    }
  }, [auth.isAuthenticated]);

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
    auth: state.auth,
    todo: state.todo,
  };
};

export default connect(mapStateToProps, {
  loadUserTodos,
  addTodo,
  deleteTodo,
  updateTodo,
})(TodoPage);
