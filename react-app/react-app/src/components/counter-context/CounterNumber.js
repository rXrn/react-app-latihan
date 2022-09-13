import { Card } from "react-bootstrap";
import { CounterWithContext } from "./CounterContext";
import { CounterProvider, withConsumer } from "../../context/counter-context";
import { CounterContext } from "../../context/counter-context";

export function CounterNumber(props) {
  const { count, title } = props;
  const colorChanging = (counter, title) => {
    return (
      <Card>
        <Card.Body>
          <h2
            className={
              counter > 1
                ? "text-bg-warning"
                : counter > 5
                ? "text-bg-danger"
                : "text-bg-success"
            }
          >
            {counter}
          </h2>
        </Card.Body>
      </Card>
    );
  };
  return colorChanging(count, title);
}
export function mapToProps(contextValue) {
  console.log("mapper function context:'", contextValue);
  return {
    count: contextValue.counter,
    title: contextValue.title,
  };
}

export default withConsumer(mapToProps)(CounterNumber);
