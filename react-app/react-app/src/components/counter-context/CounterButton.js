import { Button, Row, Col } from "react-bootstrap";
import { CounterWithContext } from "./CounterContext";
import { CounterProvider } from "../../context/counter-context";
import { CounterContext } from "../../context/counter-context";

export function CounterButton({ increment, decrement }) {
  return (
    <>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </>
  );
}

export function mapToProps(increment, decrement) {
  //   console.log("mapper function context:'", contextValue);
  return {
    incrementCount: increment,
    decrementCount: decrement,
  };
}
