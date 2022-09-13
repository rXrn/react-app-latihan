/**
 * Description:
 * 1. HOC function
 * 2. Context
 * 3. Render Props
 */

import { Component } from "react";
import { createContext } from "react";
import { render } from "react-dom";
import uniqid from "uniqid";

export const CounterContext = createContext();

const guests = [
  {
    id: uniqid(),
    name: "Adis",
    phone: "123",
    email: "adis@email.com",
    address: "Jakarta",
  },
  {
    id: uniqid(),
    name: "Juan",
    phone: "123",
    email: "juan@email.com",
    address: "Jakarta",
  },
];

export class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let temp = this.state.count;
    temp = temp + 1;
    this.setState({ count: temp });
  }

  decrement() {
    let temp = this.state.count;
    temp = temp - 1;
    this.setState({ count: temp });
  }

  render() {
    const { children } = this.props;
    const value = {
      counter: this.state.count,
      increment: this.increment,
      decrement: this.decrement,
    };

    return (
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    );
  }
}

export function withConsumer(mapToProps) {
  return (WrappedComponent) => {
    class ConsumerHoc extends Component {
      render() {
        return (
          <CounterContext.Consumer>
            {(value) => {
              const props = mapToProps({ ...value, ...this.props });
              return <WrappedComponent {...props} />;
            }}
          </CounterContext.Consumer>
        );
      }
    }
    return ConsumerHoc;
  };
}
