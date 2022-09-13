import { FormControl, InputGroup } from "react-bootstrap";
import { createRef } from "react";
import { Button } from "react-bootstrap";

export function InputName(props) {
  const { nama, action } = props;
  const input = createRef();

  const attributes = {
    placeholder: "Siapa mantanmu?",
    value: nama,
    onChange: (e) => action(e.target.value),
  };

  const cetakValue = () => {
    console.log(input.current.value);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl {...attributes} />
        <Button variant="outline-secondary" onClick={cetakValue}>
          Controlled
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl placeholder="Siapa namamu?" ref={input} />
        <Button variant="outline-secondary" onClick={cetakValue}>
          Uncontrolled
        </Button>
      </InputGroup>
    </>
  );
}
