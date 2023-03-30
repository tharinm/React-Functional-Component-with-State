import React from "react";
import SingleTask from "../../component/Todolist/SingleTask";


export default function TodoList({ data, handleDelete }) {

  return (
    <div>
      {data.map((val, key) => {
        return (
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={key}
          >
            <SingleTask
              title={val}
              key={key}
              handleDelete={() => handleDelete(val)}
            />
          </div>
        );
      })}
    </div>
  );
}
