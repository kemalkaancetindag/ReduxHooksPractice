import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { v4 as uuid } from "uuid";
const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Go to do gym",
      complete: false,
    },
    {
      id: uuid(),
      name: "Öğrenicek çok şey var",
      complete: true,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk),

);

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggleTodoAction = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});

export const deleteTodoAction = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});
