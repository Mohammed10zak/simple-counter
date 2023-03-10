import React, { Component } from "react";
import Counter from "../components/Counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 0, steps: 1 },
      { id: 2, count: 0, steps: 2 },
      { id: 3, count: 0, steps: 3 },
      { id: 4, count: 0, steps: 4 },
    ],
    total: 0,
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count = counters[index].count + counters[index].steps;
    this.setState({ counters });
  };

  onDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].count > 0) {
      counters[index].count = counters[index].count - counters[index].steps;
      this.setState({ counters });
    }
  };

  componentDidUpdate() {
    this.setState((prevState) => {
      const currentState = prevState.counters.reduce(
        (acc, curr) => acc + curr.count,
        0
      );
      if (prevState.total !== currentState) {
        return {
          total: currentState,
        };
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
        <div className="total">Total Of Counters: {this.state.total}</div>
      </div>
    );
  }
}
