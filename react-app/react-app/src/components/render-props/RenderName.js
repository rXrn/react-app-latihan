import { Component } from "react";

export class RenderName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ari",
    };
  }

  render() {
    const { name } = this.state;
    const { children } = this.props;

    return <>{children(name)}</>;
  }
}
