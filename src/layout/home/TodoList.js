import SingleTask from "../../component/Todolist/SingleTask";

export default function TodoList({
  data,
  handleDelete,
  handleEdit,
  isEditing,
  handleEditEnd,
}) {
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
              isEditing={isEditing}
              handleEdit={() => handleEdit(val)}
              handleEditEnd={() => handleEdit(val)}
            />
          </div>
        );
      })}
    </div>
  );
}
