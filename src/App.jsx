// @ts-check
import "./App.css";
import React, { useEffect, useState } from "react";
import LocalStorage from "./localStorage";
import TodoItem from "./TodoItem";

const todoDB = new LocalStorage("todos", []);

function App() {
  const [todos, setTodos] = useState(todoDB.getData());

  const [todo, setTodo] = useState({
    text: "",
    active: false,
  });

  useEffect(() => {
    todoDB.setData(todos);
  }, [todos]);

  function setActiveTodo(index, active) {
    const todosCopy = [...todos];
    todosCopy[index].active = active;
    setTodos(todosCopy);
  }

  function removeTodo(index) {
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  }

  function addTodo() {
    if (!!todo.text) {
      const todosCopy = [...todos];
      todosCopy.push(todo);
      setTodos(todosCopy);
      resetTodo();
    } else {
      alert("Todo can't be empty");
    }
  }

  function resetTodo() {
    setTodo({ text: "", active: false });
  }

  function Todos() {
    if (todos.length) {
      return (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              index={index}
              key={index}
              todo={todo}
              onActiveChange={setActiveTodo}
              onRemoveClicked={removeTodo}
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
            addTodo();
          }}
        >
          <input
            className="border p-1 rounded-sm w-full my-2"
            onChange={({ target }) => setTodo({ text: target.value, active: false })}
            type="text"
            value={todo.text}
          />
        </form>
        <Todos></Todos>
      </div>
    </div>
  );
}

export default App;
