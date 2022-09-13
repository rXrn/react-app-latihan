import { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CounterButton } from "./CounterButton";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        {
          disabled: {
            increment: false,
            decrement: true,
          },
          count: 0,
        },
        {
          disabled: {
            increment: false,
            decrement: true,
          },
          count: 0,
        },
      ],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);
    // this.incrementDisable = this.incrementDisable(this);
    // this.decrementDisable = this.decrementDisable(this);
  }

  increment(index) {
    let temp = this.state.counters;
    temp[index].count = temp[index].count + 1;
    temp[index].disabled.increment = temp[index].count >= 10;
    this.setState({ counters: temp });
  }

  decrement(index) {
    let temp = this.state.counters;
    temp[index].count = temp[index].count - 1;
    temp[index].disabled.decrement = temp[index].count <= 0;
    this.setState({ counters: temp });
  }

  addCounter() {
    let temp = this.state.counters;
    let input = {
      disabled: {
        increment: false,
        decrement: true,
      },
      count: 0,
    };
    temp.push(input);
    this.setState({ temp });
  }

  deleteCounter(index) {
    let temp = this.state.counters;
    temp.splice(index, 1);
    this.setState({ temp });
  }

  //   renderColoredNumber(count) {
  //     if (count > 4) {
  //       <Badge>{count}</Badge>;
  //     } else if ()
  //   }

  //   incrementDisable() {
  //     if (this.state.count === 10) {
  //       this.setState({ disable: true });
  //     } else {
  //       this.setState({ disable: false });
  //     }
  //     return this.state.disable;
  //   }

  //   decrementDisable() {
  //     if (this.state.count === 0) {
  //       this.setState({ disable: true });
  //     } else {
  //       this.setState({ disable: false });
  //     }
  //     return this.state.disable;
  //   }

  render() {
    return (
      <>
        <Row className="d-flex md-5">
          <Button onClick={this.addCounter}>Add</Button>
        </Row>
        <Row className="d-flex justify-content-center m-5">
          {this.state.counters.map((counter, index) => {
            return (
              <Col xs="3">
                <Card className="mt-4">
                  <Card.Header className="d-flex justify-content-between">
                    React Counter
                    <Button
                      onClick={() => {
                        this.deleteCounter(index);
                      }}
                    >
                      X
                    </Button>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <h2
                      className={
                        counter.count >= 0 && counter.count <= 5
                          ? "bg-warning"
                          : "bg-danger"
                      }
                    >
                      {counter.count}
                    </h2>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-evenly">
                    <CounterButton
                      label="+"
                      action={() => this.increment(index)}
                      isDisable={counter.count >= 10}
                    />
                    <CounterButton
                      label="-"
                      action={() => this.decrement(index)}
                      isDisable={counter.count <= 0}
                    />
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
