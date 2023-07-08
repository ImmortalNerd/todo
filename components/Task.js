import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import TodoList from "./TodoList";

export default function Task() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };

  const handleCancel = () => {
    setInput("");
    setEdit(null);
  };

  const handleSave = (input) => {
    setTask((prev) => {
      let cache = [...prev];
      let index = cache.findIndex((item) => item === edit);
      cache[index] = input;
      return cache;
    });

    setInput("");
    setEdit(null);
  };

  const handleEdit = (item, i) => {
    setEdit(item);
    setInput(item);
  };
  const handleDelete = (i) => {
    setTask(task.filter((item, index) => index !== i));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container flex justify-center">
          <div className="grid grid-cols-4 justify-center w-1/2 gap-2">
            <div className="col-start-1 col-end-5">
              <TextField
                id="outlined-textarea"
                label="To do task"
                placeholder="Task..."
                value={input}
                onChange={handleChange}
                multiline
                required
                className="w-full	"
              />
            </div>

            <div
              className={`col-end-4 col-span-1 mt-3 ${
                edit ? "inline" : "hidden"
              }`}
            >
              <Button variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
            <div
              className={`col-end-5 col-span-1 mt-3 ${
                edit ? "inline" : "hidden"
              }`}
            >
              <Button variant="contained" onClick={() => handleSave(input)}>
                Save
              </Button>
            </div>
            <div
              className={`col-end-5 col-span-1 mt-3 ${
                edit ? "hidden" : "inline"
              }`}
            >
              <Button variant="contained" type="submit">
                Add
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-10 flex flex-col items-center">
        <div>
          <h3 className="text-center">Task list</h3>
        </div>
        <TodoList
          task={task}
          input={input}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}
