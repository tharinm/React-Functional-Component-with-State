import React from 'react'
import SingleTask from '../../component/Todolist/SingleTask'

export default function TodoList({data}) {
  return (
    <div>

      {data.map((val, key) => {
        return <SingleTask title={val} key={ key} />;

      })}

      {/* <SingleTask title={data}/> */}
    </div>
  );
}
