import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [{ title: "Default State", completed: true }],
    };
  }

  newTodoOnchange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  formSubmitted = (event) => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { title: this.state.newTodo, completed: false },
      ],
      newTodo: "",
    });
  };

  toggleTodo = (i) => {
    var newState = [...this.state.todos];
    newState[i].completed = !newState[i].completed;
    this.setState({
      todos: newState,
    });
  };

  deleteTodo = (index) => {
    var todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };

  completeAll = () => {
    var todos = this.state.todos.map((todo) => {
      return {
        ...todo,
        completed: true,
      };
    });

    this.setState({
      todos,
    });
  };

  todosCount = (status) => {
    if (status === "complete")
      return this.state.todos.filter((todo) => todo.completed === true).length;
    else if (status === "incomplete")
      return this.state.todos.filter((todo) => todo.completed === false).length;
  };

  render() {
    return (
      <Container className="p-3 m-auto">
        <TodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted}
          newTodoOnchange={this.newTodoOnchange}
        />
        <Todos
          completeAll={this.completeAll}
          deleteTodo={this.deleteTodo}
          todosCount={this.todosCount}
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
      </Container>
    );
  }
}

export default App;
