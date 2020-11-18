import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import samir from "./data";
import "./styles.css";

class App extends Component {
  state = {
    todos: samir
  };

  handleComplete = (id) =>
    this.setState({
      todos: this.state.todos.map((el) => {
        return id === el.id ? { ...el, isComplete: !el.isComplete } : el;
      })
    });

  handleRemove = (id) =>
    this.setState({
      todos: this.state.todos.filter((el) => {
        return el.id !== id;
      })
    });

  handleAdd = (text) => {
    if (text.trim() === "") {
      return alert("Enter A valid Task");
    }
    const newTodo = { text: text, id: Date.now(), isComplete: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <AddTodo handleAdd={this.handleAdd} />
        <TodoList
          todoList={this.state.todos}
          removeTodo={this.handleRemove}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
