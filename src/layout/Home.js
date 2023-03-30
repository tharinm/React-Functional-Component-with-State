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

  return (
    <div style={{ marginTop: "20px" }}>
      <InputTodo addNewTask={addNewTask} />
      <TodoList data={taskListdata} />
    </div>
  );
}
