import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux";
import { v4 as uuid } from "uuid";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch((todo) => addTodoAction(todo));

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      return;
    }
    addTodo({
      id: uuid(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
