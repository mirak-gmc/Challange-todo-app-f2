import React from "react";

class AddTodo extends React.Component {
  state = {
    text: ""
  };

  handleChange = (event) => this.setState({ text: event.target.value });

  render() {
    return (
      <React.Fragment>
        <h1>Todo App </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.handleAdd(this.state.text);
            this.setState({ text: "" });
          }}
        >
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
          />
          <button className="btn">Add</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
