import { Button } from "react-bootstrap";

export function GuestRow({ guests, sayHello }) {
  return guests.map((val, key) => {
    return (
      <tr key={key}>
        <td>{key + 1}</td>
        <td>{val.name}</td>
        <td>{val.phone}</td>
        <td>{val.email}</td>
        <td>{val.address}</td>
        <td>
          <div>
            <Button className="mx-2" onClick={() => sayHello(val)}>
              Daftar
            </Button>
          </div>
        </td>
      </tr>
    );
  });
}
