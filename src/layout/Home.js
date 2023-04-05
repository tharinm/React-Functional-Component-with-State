import React from "react";
import InputTodo from "../component/Inputtodo/InputTodo";
import TodoList from "./home/TodoList";
import { useState } from "react";

export default function Home() {
  const [taskListdata, settaskListdata] = useState([
    "Task 1",
    "Task 2",
    "Task 3",
  ]);

  const addNewTask = (newTask) => {
    settaskListdata([newTask, ...taskListdata]);
  };

  const handleDelete = (deleteTodo) => {
    const updateTodo = taskListdata.filter((task) => task !== deleteTodo);
    settaskListdata(updateTodo);
  };

  const handleUpdate = (editTodo) => {
    console.log(editTodo);
    settaskListdata([editTodo, ...taskListdata]);
  };

  console.log(taskListdata);

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InputTodo addNewTask={addNewTask} />

      <TodoList
        data={taskListdata}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
