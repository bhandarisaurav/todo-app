import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  formSubmitted = (event) => {
    event.preventDefault();
    let todo = event.target.newTodo.value;
    event.target.newTodo.value = "";
    this.setState({
      todos: [...this.state.todos, { title: todo, done: false }],
    });
  };
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.title}>{todo.title}</li>
          ))}
        </ul>
        <form onSubmit={this.formSubmitted}>
          <label forName="newTodo">Add Todo</label>
          <input id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default App;
