import React from "react";
import { Button, Jumbotron, Badge, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <Jumbotron className="w-75 p-5 m-auto">
      <h3>
        All Todos
        <Badge variant="primary" className="mx-2">
          Total = {props.todos.length}
        </Badge>
        <Badge variant="primary" className="mx-2">
          {props.todosCount("complete")}{" "}
          <FontAwesomeIcon icon={faCheckCircle} color="#00ff3a" />
        </Badge>
        <Badge variant="primary">
          {props.todosCount("incomplete")}{" "}
          <FontAwesomeIcon icon={faHourglassHalf} color="yellow" />
        </Badge>
        <Button variant="success" className="ml-3" onClick={props.completeAll}>
          Complete All
        </Button>
      </h3>
      <ListGroup className="w-50">
        {props.todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </ListGroup>
    </Jumbotron>
  );
}
