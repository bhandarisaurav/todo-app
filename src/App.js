import React, { Component } from "react";
import "./App.css";
import {
  Button,
  Form,
  Container,
  Jumbotron,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
        <Jumbotron className="w-75 p-5 mx-auto">
          <h3>Create Todo</h3>

          <Form className="w-50" onSubmit={this.formSubmitted}>
            <Form.Group>
              <Form.Label>Add Todo</Form.Label>
              <Form.Control
                type="text"
                placeholder="New Todo"
                name="newTodo"
                onChange={this.newTodoOnchange}
                value={this.state.newTodo}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Jumbotron>

        <Jumbotron className="w-75 p-5 m-auto">
          <h3>
            All Todos
            <Badge variant="primary" className="mx-2">
              Total = {this.state.todos.length}
            </Badge>
            <Badge variant="primary" className="mx-2">
              {this.todosCount("complete")}{" "}
              <span role="img" aria-label="Check">
                ✔️
              </span>
            </Badge>
            <Badge variant="primary">
              {this.todosCount("incomplete")}{" "}
              <span role="img" aria-label="hourglass">
                ⌛
              </span>
            </Badge>
            <Button variant="success" className="ml-3" onClick={null}>
              Complete All
            </Button>
          </h3>
          <ListGroup className="w-50">
            {this.state.todos.map((todo, index) => (
              <ListGroup.Item
                key={index}
                variant="primary"
                className={
                  todo.completed ? "font-weight-bold p-0 checked" : "p-0"
                }
              >
                <input
                  type="checkbox"
                  className="m-3"
                  checked={todo.completed}
                  style={{ cursor: "pointer" }}
                  onChange={() => this.toggleTodo(index)}
                />
                {todo.title}
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  color="red"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: 10,
                    top: 15,
                  }}
                  onClick={() => this.deleteTodo(index)}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
