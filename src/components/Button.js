import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className="todo-input-item">
      <button onClick={onClick} className="primary-btn" type="button">
        Add
      </button>
    </div>
  );
};

export default Button;
