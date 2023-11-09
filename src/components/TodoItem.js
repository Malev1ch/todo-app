import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const TodoItem = ({
  todoTitle,
  todoDescription,
  handleDeleteTodo,
  hadleSettingsTodo,
  id,
  handleCommit,
  index,
  isCompletedScreen,
  handleReturnToToDoClick,
}) => {
  return (
    <div className="todo-list-item">
      <div>
        <h3>{todoTitle}</h3>
        <p>{todoDescription}</p>
      </div>
      <div>
        <IoMdSettings onClick={() => hadleSettingsTodo(id)} title="Settings" className="icon" />
        <AiOutlineDelete onClick={() => handleDeleteTodo(id)} title="Delete?" className="icon" />
        {isCompletedScreen ? (
          <IoMdRefresh className="icon" onClick={() => handleReturnToToDoClick(id)} />
        ) : (
        <BsCheckLg
          onClick={() => handleCommit(id)}
          title="Completed?"
          className=" check-icon"
        />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
