import React from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
export default function TodoForm(props) {
  return (
    <Jumbotron className="w-75 p-5 mx-auto">
      <h3>Create Todo</h3>

      <Form className="w-50" onSubmit={props.formSubmitted}>
        <Form.Group>
          <Form.Label>Add Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="New Todo"
            name="newTodo"
            onChange={props.newTodoOnchange}
            value={props.newTodo}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Jumbotron>
  );
}
