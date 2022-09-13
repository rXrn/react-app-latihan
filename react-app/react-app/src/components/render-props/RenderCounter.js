import { Component } from "react";

export class RenderCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    let temp = this.state.count;
    temp = temp + 1;
    this.setState({ count: temp });
  }

  decrementCount() {
    let temp = this.state.count;
    temp = temp - 1;
    this.setState({ count: temp });
  }

  render() {
    const { count } = this.state;
    const { children } = this.props;

    return (
      <>
        {/* {children(this.incrementCount)} */}
        {children(this.incrementCount, this.decrementCount)}
        {/* {children(this.decrementCount)} */}
        <strong>{count}</strong>
      </>
    );
  }
}
