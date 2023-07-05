import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

export default function MultilineTextFields() {
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

  const handleEdit = (item, i) => {
    setEdit(item);
    setInput(item);
  };

  const handleDelete = (i) => {
    setTask(task.filter((item, index) => index !== i));
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
        <TableContainer className="max-w-fit	">
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Done</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {task.map((item, i) => {
                return (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleEdit(item, i)}
                      >
                        Edit your task
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(i)}
                      >
                        Delete your task
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
