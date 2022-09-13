import { withCounter } from "./WithCounter";
import { Component } from "react";
import { Button } from "react-bootstrap";

class ClickButton extends Component {
  render() {
    const { count, increment, name = "You" } = this.props;
    return (
      <Button onClick={increment}>
        {name} clicked {count} times
      </Button>
    );
  }
}

export default withCounter(ClickButton);
