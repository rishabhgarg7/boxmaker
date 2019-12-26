import React, { Component } from "react";
import Box from "./Box";
import uuid from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", bgcolor: "", nboxes: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //add the box in state
    this.setState(prevState => ({ width: " ", height: " ", bgcolor: " " }));
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  remove() {
    // remove the box from state
  }

  render() {
    return (
      <div>
        <p />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="bgcolor">Color</label>
          <input
            type="text"
            name="bgcolor"
            value={this.state.bgcolor}
            onChange={this.handleChange}
          />
          <br />
          <button>CreateTheBox</button>
        </form>

        <Box />
      </div>
    );
  }
}

export default BoxList;
