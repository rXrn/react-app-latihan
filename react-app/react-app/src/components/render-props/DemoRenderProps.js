import { RenderName } from "./RenderName";

export function DemoRenderProps() {
  const text = "welcome to react";
  return (
    <p>
      Your name is &nbsp;
      <RenderName>
        {(name) => (
          <strong>
            {name}, {text}
          </strong>
        )}
      </RenderName>
    </p>
  );
}
