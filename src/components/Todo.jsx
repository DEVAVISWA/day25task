import React from "react";
import "../components/Todo.css";

export default function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div key={todo.id} className="col">
            <div
              className="card h-100  border-0"
              style={{
                width: "20rem",
                background: "#CCF5D3",
              }}
            >
              <div className="card-body m-2">
                <p className=" card-text text-black fw-bold">
                  <span id="name">Name:</span> {todo.taskName}{" "}
                </p>

                <p className="fw-bold">
                  <span id="description">Description :</span> {todo.description}
                </p>

                <div className="mb-2">
                  {" "}
                  <label htmlFor="status" className="me-1">
                    <b id="status">Status:</b>{" "}
                  </label>{" "}
                  <select
                    className={
                      todo.status === "Completed"
                        ? "bg-success text-white "
                        : " text-white "
                    }
                    style={{
                      borderRadius: "5px",
                      border: "none",
                      background: "#FF69B4",
                    }}
                    value={todo.status}
                    name="status"
                    onChange={(e) => updateStatus(todo.id, e.target.value)}
                  >
                    <option
                      value="Completed"
                      className={
                        todo.status === "Completed" ? "bg-success" : ""
                      }
                    >
                      Completed
                    </option>
                    <option
                      value="Not Completed"
                      className={
                        todo.status !== "Completed"
                          ? "bg-danger text-white"
                          : ""
                      }
                    >
                      Not Completed
                    </option>
                  </select>
                </div>

                <div className="float-end m-3  p-2">
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => editTodo(todo.id)}
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger "
                    onClick={() => deleteTodo(todo.id)}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}