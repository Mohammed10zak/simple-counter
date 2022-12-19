import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    value: 0,
    step: this.props.step,
  };

  onIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + +this.state.step,
    }));
  };

  onDecrement = () => {
    if (this.state.value > 0) {
      this.setState((prevState) => ({
        value: prevState.value - +this.state.step,
      }));
    }
  };

  render() {
    return (
      <div className="counter">
        <div className="value">{this.state.value}</div>
        <button onClick={this.onDecrement} className="decrement">
          -
        </button>
        <button onClick={this.onIncrement} className="increment">
          +
        </button>
      </div>
    );
  }
}

// another solution
// import React, { Component } from "react";
// import "./style.css";
// export default class Counter extends Component {
//   render() {
//     const { value, onIncrement, onDecrement } = this.props;

//     return (
//       <div className="counter">
//         <div className="value">{value}</div>
//         <p>
//           <button className="decrement" onClick={() => onDecrement(2)}>
//             -
//           </button>
//         </p>
//         <p>
//           <button className="increment" onClick={() => onIncrement(2)}>
//             +
//           </button>
//         </p>
//       </div>
//     );
//   }
// }
