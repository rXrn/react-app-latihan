import { GuestForm } from "./GuestForm";
import { Col, Button, Table } from "react-bootstrap";
import { GuestRow } from "./GuestRow";

export function GuestBookList(props) {
  const { guests, openForm } = props;

  const sayHello = (guest) => {
    alert(`Hello ${guest.name} from ${guest.address}`);
  };
  return (
    <>
      <h2 className="text-center">Guest Book</h2>
      <Col xs="12" className="mb-3 d-flex justify-content-center">
        <Button onClick={() => openForm()}>Add Guest</Button>
      </Col>
      <Table striped bordered hover variant="dark" className="p-4">
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
          <GuestRow guests={guests} sayHello={sayHello} />
          {/* <GuestRow
            contact={contacts}
            sayHello={sayHello}
            array={["Ari", "Putra", "Nugraha"]}
          /> */}
        </tbody>
      </Table>
    </>
  );
}
