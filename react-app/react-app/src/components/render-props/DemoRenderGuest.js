import { RenderGuest } from "./RenderGuest";

export function DemoRenderGuest() {
  const text = "welcome to react";
  return (
    <p>
      Your name is &nbsp;
      <RenderGuest>
        {(guests) =>
          guests.map((val, key) => {
            return <li key={key}>{val.name}</li>;
          })
        }
      </RenderGuest>
    </p>
  );
}
