import { Component } from "react";

export class RenderGuest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: [
        {
          id: 1,
          name: "Ari",
          phone: "123",
          email: "ari@email.com",
          address: "Jakarta",
        },
        {
          id: 2,
          name: "Putra",
          phone: "456",
          email: "putra",
          address: "Indonesia",
        },
      ],
    };
  }

  render() {
    const guests = this.state.guests;
    const { children } = this.props;
    return (
      <>
        <ul>{children(guests)}</ul>
      </>
    );
  }
}
