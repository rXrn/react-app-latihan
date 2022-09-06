import { GuestRow } from "./GuestRow";
import Table from "react-bootstrap/Table";

const contacts = [
  {
    id: 1,
    name: "Adis",
    phone: "123",
    email: "adis@email.com",
    address: "Jakarta",
  },
  {
    id: 2,
    name: "Juan",
    phone: "123",
    email: "juan@email.com",
    address: "Jakarta",
  },
  {
    id: 3,
    name: "Eldi",
    phone: "123",
    email: "eldi@email.com",
    address: "Jakarta",
  },
  {
    id: 4,
    name: "Vergi",
    phone: "123",
    email: "vergi@email.com",
    address: "Jakarta",
  },
  {
    id: 5,
    name: "Rizki",
    phone: "123",
    email: "rizki@email.com",
    address: "Jakarta",
  },
  {
    id: 6,
    name: "Tika",
    phone: "123",
    email: "tika@email.com",
    address: "Jakarta",
  },
  {
    id: 7,
    name: "Wita",
    phone: "123",
    email: "wita@email.com",
    address: "Jakarta",
  },
  {
    id: 8,
    name: "Kenji",
    phone: "123",
    email: "kenji@email.com",
    address: "Jakarta",
  },
  {
    id: 9,
    name: "Riri",
    phone: "123",
    email: "riri@email.com",
    address: "Jakarta",
  },
  {
    id: 10,
    name: "Sirojul",
    phone: "123",
    email: "sirojul@email.com",
    address: "Jakarta",
  },
];

export function GuestBookList() {
  const sayHello = (guest) => {
    alert(`Hello ${guest.name} from ${guest.address}`);
  };
  return (
    <>
      <h2 className="text-center">Guest Book</h2>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <GuestRow
            contact={contacts}
            sayHello={sayHello}
            array={["Ari", "Putra", "Nugraha"]}
          />
        </tbody>
      </Table>
    </>
  );
}

export default GuestBookList;
