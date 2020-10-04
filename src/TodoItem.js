import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem(props) {
  const { todo, index } = props;
  return (
    <ListGroup.Item
      variant="primary"
      className={todo.completed ? "font-weight-bold p-0 checked" : "p-0"}
    >
      <input
        type="checkbox"
        className="m-3"
        checked={todo.completed}
        style={{ cursor: "pointer" }}
        onChange={() => props.toggleTodo(index)}
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
        onClick={() => props.deleteTodo(index)}
      />
    </ListGroup.Item>
  );
}
