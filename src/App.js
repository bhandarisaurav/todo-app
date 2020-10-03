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
class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [{ title: "Default State", done: true }],
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
      todos: [...this.state.todos, { title: this.state.newTodo, done: false }],
      newTodo: "",
    });
  };

  toggleTodo = (e, i) => {
    var newState = [...this.state.todos];
    newState[i].done = !newState[i].done;
    this.setState({
      todos: newState,
    });
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
            All Todos <Badge variant="primary">{this.state.todos.length}</Badge>
          </h3>
          <ListGroup className="w-50">
            {this.state.todos.map((todo, index) => (
              <ListGroup.Item
                key={index}
                variant="primary"
                className={todo.done ? "font-weight-bold p-0 checked" : "p-0"}
              >
                <input
                  type="checkbox"
                  className="m-3"
                  defaultChecked={todo.done}
                  onClick={(event) => this.toggleTodo(event, index)}
                />
                {todo.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
