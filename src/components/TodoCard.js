import React from "react";

function TodoCard(props) {
  // todo = { text , id , isComplete }
  return (
    <div className="todo-card">
      <p className={props.todo.isComplete ? "is-complete" : ""}>
        {props.todo.text}
      </p>
      <div>
        <button onClick={() => props.removeTodo(props.todo.id)} className="btn">
          Delete
        </button>
        <button
          onClick={() => props.handleComplete(props.todo.id)}
          className="btn"
        >
          {props.todo.isComplete ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
