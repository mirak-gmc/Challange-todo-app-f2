import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todoList.map((el) => (
        <TodoCard
          key={el.id}
          todo={el}
          removeTodo={props.removeTodo}
          handleComplete={props.handleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
