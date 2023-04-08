import React from "react";
import InputTodo from "../component/Inputtodo/InputTodo";
import TodoList from "./home/TodoList";
import { useState } from "react";

export default function Home() {
  const [taskListdata, settaskListdata] = useState([]);
  const [testing, setTesting] = useState([])

  const addNewTask = (newTask) => {
    settaskListdata([newTask, ...taskListdata]);
  };

  const handleDelete = (deleteTodo) => {
    const updateTodo = taskListdata.filter((task) => task !== deleteTodo);
    settaskListdata(updateTodo);
  };

  const handleUpdate = (editTodo) => {
    console.log(editTodo);
  };

  const itemNum = (val) => {
  
      
  
  };

  const setUpdate = (updatedTodo, id) => {
    settaskListdata(taskListdata.map((todo) => {
      if (todo.id === id) {
        todo = updatedTodo;
        console.log(todo.id)
      }
      return todo;
    }))
  }

  //console.log(taskListdata)

  console.log('In Parent '+ testing)
  

  

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
        setUpdate={setUpdate}
        testing={testing}
        setTesting={setTesting}
      />
    </div>
  );
}
