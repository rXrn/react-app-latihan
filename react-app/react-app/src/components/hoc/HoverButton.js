import { Button } from "react-bootstrap";
import { Component } from "react";
import { withCounter } from "./WithCounter";

class HoverButton extends Component {
  render() {
    const { count, increment, name = "You" } = this.props;
    return <Button onMouseOver={increment}>You hovered {count} times</Button>;
  }
}

export default withCounter(HoverButton);
