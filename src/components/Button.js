import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="todo-input-item">
        <button
          onClick={this.props.onCLick}
          className="primary-btn"
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}

export default Button;
