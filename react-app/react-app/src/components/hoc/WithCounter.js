import { render } from "@testing-library/react";
import { Component } from "react";

export function withCounter(WrappedComponent, incrementNumber) {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };

      this.increment = this.increment.bind(this);
    }

    increment() {
      this.setState({ count: this.state.count + incrementNumber });
    }

    render() {
      return (
        <WrappedComponent count={this.state.count} increment={this.increment} />
      );
    }
  }

  return withCounter;
}
