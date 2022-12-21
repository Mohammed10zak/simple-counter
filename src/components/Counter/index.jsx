import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="value">{this.props.counter.count}</div>

        <button
          className="decrement"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          className="increment"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
      </div>
    );
  }
}
