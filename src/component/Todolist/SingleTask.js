import React from "react";

export default function SingleTask({ title, handleDelete }) {
  // const deleteTask = () => {
  // handleDelete();
  // };

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
        <p>{title}</p>
      </div>

      <div style={{ cursor: "pointer" }}>
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
