import "..assets/css/styles.css";
import contoh from "..assets/css/styles.module.css";

const styles = {
  color: "aqua",
  textTransform: "uppercase",
};

const name = "World";
export const hello = <h1 style={{ color: "red" }}>Hello World</h1>;
export const greet = <h1 style={styles}>Hello {name}</h1>;
export const greetHello = (name) => {
  return <h1 className="greet">Greeting, {name}!</h1>;
};
