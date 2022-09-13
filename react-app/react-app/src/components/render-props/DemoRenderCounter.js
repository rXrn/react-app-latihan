import { Button } from "react-bootstrap";
import { RenderCounter } from "./RenderCounter";

export function DemoRenderCounter() {
  const text = "welcome to react";
  return (
    <p>
      Your name is &nbsp;
      <RenderCounter>
        {(incrementCount, decrementCount) => (
          <>
            <Button onClick={() => incrementCount()}>Increment</Button>
            <Button onClick={() => decrementCount()}>Decrement</Button>
          </>
        )}
      </RenderCounter>
    </p>
  );
}
