import {
  GET_USER_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  LOADING_TODO,
} from "../types/todoTypes";

const initialState = {
  todos: [],
  isLoading: false,
};

function todo(state = initialState, action) {
  switch (action.type) {
    case LOADING_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_TODOS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id
            ? {
                ...todo,
                complete: action.payload.complete,
                task: action.payload.task,
              }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default todo;
