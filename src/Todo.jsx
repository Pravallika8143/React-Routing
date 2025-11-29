import React from "react";

function Todo(props) {
  return (
    <div className="my-2">
      <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm border rounded">
        <span
          className="fw-semibold"
          style={
            props.t.status
              ? { textDecoration: "line-through", opacity: 0.6 }
              : {}
          }
        >
          {props.t.title}
        </span>

        <div>
          <button
            className={`btn btn-sm ${
              props.t.status ? "btn-success" : "btn-primary"
            } me-2`}
            onClick={() => props.done(props.t.id)}
          >
            {props.t.status ? "Undo" : "Done"}
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => props.del(props.t.id)}
          >
            Delete
          </button>
        </div>

      </li>
    </div>
  );
}

export default Todo;

