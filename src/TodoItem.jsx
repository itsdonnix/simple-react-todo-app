import React from "react";

/** Todo Item Component
 * @param {{
 *    todo: Array<any>
 *    index: number
 *    onActiveChange(index: number, active: boolean)
 *    onRemoveClicked(index: number)
 * }}
 */
function TodoItem({ todo, index, onActiveChange, onRemoveClicked }) {
  return (
    <li className="flex p-2 border-b items-center">
      <input
        className="mr-2"
        type="checkbox"
        onChange={({ target }) => onActiveChange(index, target.checked)}
        checked={todo.active}
        style={{ transform: "scale(1.3)" }}
      />
      <span
        className={"todo--text " + (todo.active ? "todo--inactive" : "")}
        style={{ textDecoration: todo.active && "line-through" }}
      >
        {todo.text}
      </span>
      <button
        aria-label="Delete todo"
        className="ml-auto"
        onClick={() => onRemoveClicked(index)}
        title="Delete todo"
      >
        ❎
      </button>
    </li>
  );
}

export default TodoItem;
