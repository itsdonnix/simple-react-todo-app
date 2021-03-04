// @ts-check
import "./App.css";
import React, { useState } from "react";
import LocalStorage from "./localStorage";

const todoDB = new LocalStorage("todos", []);

function App() {
  const [todos, setTodos] = useState(todoDB.getData());

  const [todo, setTodo] = useState({
    description: "",
    active: false,
  });

  function setActiveUser(index, active) {
    const _todos = [...todos];
    _todos[index].active = active;
    setTodos(_todos);
    todoDB.setData(_todos);
  }

  function removeUser(index) {
    const _todos = [...todos];
    _todos.splice(index, 1);
    setTodos(_todos);
    todoDB.setData(_todos);
  }

  function addUser() {
    if (!!todo.description) {
      const _todos = [...todos];
      _todos.push(todo);
      setTodos(_todos);
      todoDB.setData(_todos);
      resetTodo();
    } else {
      alert("User description can't be empty");
    }
  }

  function resetTodo() {
    setTodo({ description: "", active: false });
  }

  return (
    <div id="app" className="min-h-full flex-1 border rounded-md shadow-sm">
      <div className="py-1">
        <h4 className="text-2xl">My Todo Lists</h4>
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addUser();
          }}
        >
          <input
            className="border p-1 rounded-sm w-full my-2"
            type="text"
            value={todo.description}
            onChange={(event) => setTodo({ description: event.target.value, active: false })}
          />
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex p-2 border-b items-center">
              <input
                className="mr-2"
                type="checkbox"
                onChange={({ target }) => setActiveUser(index, target.checked)}
                checked={todo.active}
                style={{ transform: "scale(1.3)" }}
              />
              <span style={{ textDecoration: todo.active && "line-through" }}>
                {todo.description}
              </span>
              <button
                aria-label="Delete todo"
                className="ml-auto"
                onClick={() => removeUser(index)}
                title="Delete todo"
              >
                ❎
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
