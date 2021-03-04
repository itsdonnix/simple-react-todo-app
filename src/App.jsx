// @ts-check
import "./App.css";
import React, { useState } from "react";
import LocalStorage from "./localStorage";
import TodoItem from "./TodoItem";

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
      alert("Todo can't be empty");
    }
  }

  function resetTodo() {
    setTodo({ description: "", active: false });
  }

  function Todos() {
    if (todos.length) {
      return (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              onActiveChange={setActiveUser}
              onRemoveClicked={removeUser}
            />
          ))}
        </ul>
      );
    } else {
      return (
        <div className="text-gray-500 flex flex-col text-center py-5">
          Hmm ... There's nothing to do now 🤔
        </div>
      );
    }
  }

  return (
    <div id="app" className="min-h-full flex-1 border rounded-md shadow-sm">
      <div className="py-1">
        <h4 className="text-2xl">My Todo Lists</h4>
      </div>
      <div className="flex flex-col flex-1 min-h-full">
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
        <Todos></Todos>
      </div>
    </div>
  );
}

export default App;
