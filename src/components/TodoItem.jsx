import "./todoitem.css";
function TodoItem({ data,updateStatus,deleteTodo }) {
 let {title,status,id} = data;
  return (
    <div className={status ? "completed todo-item" : "todo-item"}>
      <div
        className={status ? "status bg-dodger-blue" : "status"}
        onClick={() => updateStatus(id)}
      ></div>
      <p>{title}</p>
      <button className="delete-btn" onClick={() => deleteTodo(id)}>
        
      </button>
    </div>
  );
}

export default TodoItem;
