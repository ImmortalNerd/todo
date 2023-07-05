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
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };

  const handleEdit = (i) => {
    let cache = [...task];
    setInput(cache[i]);
    cache.pop();
    setTask([...cache]);
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
        <TableContainer className="max-w-fit	">
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Done</TableCell>
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
                      <Button variant="contained" onClick={() => handleEdit(i)}>
                        Edit your task
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Checkbox color="primary" />
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
