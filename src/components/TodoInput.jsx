import "./todoinput.css";
import { useState } from "react";

function TodoInput({ updateTodo }) {
  const [text, setText] = useState("");

  return (
    <div id="todo-input">
      <button
        id="add-todo-btn"
        onClick={() => {
          updateTodo(text);
          setText("");
        }}
      >
        +
      </button>
      <input
        type="text"
        id="add-todo-text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Add to do"
      />
    </div>
  );
}

export default TodoInput;
