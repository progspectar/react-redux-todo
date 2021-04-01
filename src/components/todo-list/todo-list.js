import React, { Component } from "react";

import "./todo-list.css";

const TodoList = ({ items }) => {
  const elements = items.map((item) => {
    const { id, ...itemprops } = item;
    return (
      <li key={id} className="list-group-item">
        {itemprops.label}
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements} </ul>;
};

export default TodoList;
// const TodoList = ({ items }) => {
//   return (
//     <div className="todo-list">
//       <h2>TodoList</h2>
//       {items}
//     </div>
//   );
// };
