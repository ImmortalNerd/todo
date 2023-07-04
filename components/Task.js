import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function MultilineTextFields() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <div>
            <TextField
              id="outlined-textarea"
              label="To do task"
              placeholder="Task..."
              value={input}
              onChange={handleChange}
              multiline
              required
              sx={{ m: 1, width: "25rem" }}
            />
          </div>
          <div className=" mt-3">
            <Button variant="contained" type="submit">
              Add your task
            </Button>
          </div>
        </div>
      </form>
      <div className="mt-10 flex flex-col items-center">
        <div>
          <h3 className="text-center">Task list</h3>
        </div>
        <div className="w-1/2">
          <table className="w-full border border-2">
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {task.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item}</td>
                    <td> Edit </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
