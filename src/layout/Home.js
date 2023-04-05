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

  const [isEditing, setIsEditing] = useState(false);

  const addNewTask = (newTask) => {
    settaskListdata([newTask, ...taskListdata]);
  };

  const handleDelete = (deleteTodo) => {
    const updateTodo = taskListdata.filter((task) => task !== deleteTodo);
    settaskListdata(updateTodo);
  };

  const handleEdit = (editTodo) => {
    setIsEditing(true);
    const getEditTodo = taskListdata.map((task) => {
      if (task === editTodo) {
        return editTodo
      } else {
        return task;
      }

      //  console.log("todo List Item " + task);
    });

    settaskListdata(getEditTodo)
    console.log("todo List Click Item " + editTodo);
    console.log(getEditTodo);
    console.log(isEditing);
  };

  const handleEditEnd = () => {
    setIsEditing(false);
  }

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
        handleEdit={handleEdit}
        isEditing={isEditing}
        handleEditEnd={handleEditEnd}
      />
    </div>
  );
}
