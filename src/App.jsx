import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import { nanoid } from "nanoid";
function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  // load todo data from localstorage
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
  }, []);

  const handleAddTodo = (title) => {
    if (title === "") return;
    const payload = {
      id: nanoid(5),
      status: false,
      title,
    };
    const updatedTodo = [...todos, payload];
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setTodos(updatedTodo);
  };

  const handleStatus = (id) => {
    const updatedTodos = todos.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((el) => el.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const completedTodos = todos.filter((el) => el.status);
  const pendingTodos = todos.filter((el) => !el.status);
  return (
    <div className="App">
      <TodoInput updateTodo={handleAddTodo} />
      {pendingTodos.map((el, index) => (
        <TodoItem
          data={el}
          updateStatus={handleStatus}
          deleteTodo={handleDelete}
        />
      ))}
      <div id="show-completed" onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} completed todos
      </div>
      {showCompleted &&
        completedTodos.map((el, index) => (
          <TodoItem
            data={el}
            updateStatus={handleStatus}
            deleteTodo={handleDelete}
          />
        ))}
    </div>
  );
}

export default App;
