import React from "react";
import { useState } from "react";

export default function InputTodo({ addNewTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNewTask = () => {
    addNewTask(inputValue);
    setInputValue('');
  };
  //console.log(inputValue)

  // const[count,setCount]=useState(0)

  //  const handleClick = (event) => {
  //  event.preventDefault();
  //  const newTodoInput= event.target.item.value;
  //  const updatedTodo = [...newTodo, newTodoInput];
  //  setNewtodo(updatedTodo);
  //  event.target.item.value = "";
  //  };
  // const added = () => {
  // setCount(count + 1);
  // }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input type="text " name="item" onChange={handleInput}  value={inputValue}/>
        <button onClick={handleAddNewTask}>Add Todo</button>
      </div>
    </div>
  );
}
