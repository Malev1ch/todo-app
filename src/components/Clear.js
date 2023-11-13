import React, { Component } from "react";

class Clear extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.handleClear} className="clear">
        Clear
      </button>
    );
  }
}

export default Clear;
