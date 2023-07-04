import React from "react";
import Task from "../components/Task";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center">
          <div>
          <h1 className="text-center">TO DO List</h1>
          </div>
          <div className="my-5">
            <Task />
          </div>
        </div>
      </div>
    </>
  );
}
