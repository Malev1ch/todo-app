import React, { Component } from "react";

class Switcher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn-area">
        <button
          onClick={() => this.props.setIsCompletedScreen(false)}
          className={`secondaryBtn ${this.props.isCompletedScreen === false && "active"}`}>
          To Do
        </button>
        <button
          onClick={() => this.props.setIsCompletedScreen(true)}
          className={`secondaryBtn ${this.props.isCompletedScreen === true && "active"}`}>
          Completed
        </button>
      </div>
    );
  }
}

export default Switcher;
