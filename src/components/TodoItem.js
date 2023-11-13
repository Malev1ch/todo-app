import React, { Component } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";

class TodoItem extends Component {
  render() {
    const {
      todoTitle,
      todoDescription,
      handleDeleteTodo,
      id,
      handleCommit,
      index,
      isCompletedScreen,
    } = this.props;

    return (
      <div className="todo-list-item">
        <div>
          <h3>{todoTitle}</h3>
          <p>{todoDescription}</p>
        </div>
        <div>
          <AiOutlineDelete
            onClick={() => handleDeleteTodo(id)}
            title="Delete?"
            className="icon"
          />

          {isCompletedScreen ? (
            <IoMdRefresh
              className="icon"
              onClick={() => handleCommit(id)}
            />
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
  }
}

export default TodoItem;
