import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

export default function TodoList({ task, handleDelete, handleEdit }) {
  return (
    <div>
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
  );
}
