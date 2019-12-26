import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
  }
  static defaultProps = { width: "100px", height: "100px", bgcolor: "red" };

  handleRemove() {
    this.props.remove();
  }

  render() {
    return (
      <div className="Box">
        <br />
        <div
          className="Box-color"
          style={{
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.bgcolor
          }}
        />
        <button onClick={this.handleRemove}>Remove an item</button>
      </div>
    );
  }
}

export default Box;
