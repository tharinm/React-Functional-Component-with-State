import SingleTask from "../../component/Todolist/SingleTask";

export default function TodoList({
  data,
  handleDelete,
  handleEdit,
  handleUpdate,
  item,
  setUpdate,
  testing,
  setTesting,
}) {
  const done = () => { 
    setTesting(5)
  };

  console.log(testing);

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
              item={() => item(key)}
              handleDelete={() => handleDelete(val)}
              handleUpdate={handleUpdate}
              setUpdate={setUpdate}
              itemProp
            />
          </div>
        );
      })}

      <button onClick={done}>TESTING</button>
    </div>
  );
}
