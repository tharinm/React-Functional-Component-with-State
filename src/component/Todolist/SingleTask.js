import React, { useState } from "react";

export default function SingleTask({ title, handleDelete, handleUpdate}) {
  const [editMode, setEditMode] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // console.log(newTask);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditMode(false);
       handleUpdate(newTask)
      
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  //console.log(newTask)
  return (
    <div
      style={{
        width: "500px",
        height: "40px",
        border: "solid 2px gray",
        display: "flex",
        justifyContent: "center",
        gap: "100px",
        alignItems: "center",
      }}
    >
      <div style={{ width: "400px" }}>
        {!editMode && <p>{title}</p>}
        {editMode && (
          <input
            type="text"
            plasehoder={title}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        )}
        {/* {editMode ? ( */}
        {/* <input */}
        {/* // type="text" */}
        {/* // plasehoder={title} */}
        {/* // onChange={handleInputChange} */}
        {/* // onKeyDown={handleKeyDown} */}
        {/* // /> */}
        {/* ) : ( */}
        {/* <p>{title}</p> */}
        {/* )} */}
      </div>

      <div
        style={{
          cursor: "pointer",
          display: "flex",
          gap: "15px",
          margin: "15px",
        }}
      >
        <button onClick={handleEdit}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/material-core/18/create-256.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </button>
        <button onClick={handleDelete}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_delete-256.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
    </div>
  );
}
