import { Button } from "react-bootstrap";

export function GuestRow(props) {
  return (
    <>
      {/* <h2 className="text-center">Guest Book</h2> */}

      {props.contact.map((val, key) => {
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{val.name}</td>
            <td>{val.phone}</td>
            <td>{val.email}</td>
            <td>{val.address}</td>
            <td>
              <div>
                <Button className="mx-2" onClick={() => props.sayHello(val)}>
                  Daftar
                </Button>
                <Button
                  className="mx-2"
                  onClick={() => alert(props.array[key])}
                >
                  Contact
                </Button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
}
