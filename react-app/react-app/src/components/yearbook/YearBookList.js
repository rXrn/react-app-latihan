import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { YearBookForm } from "./YearBookForm";

export class YearBookList extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       name: [],
  //     };
  //   }
  handleDelete(index) {
    const { deleteAlumni } = this.props;
    deleteAlumni(index);
  }

  handleUpdate(index) {
    const { updateAlumni } = this.props;
    updateAlumni(index);
  }

  render() {
    const { switchPage, addAlumni, alumni } = this.props;
    // console.log("alumni: ", alumni);
    return (
      <>
        <p>Year Book List</p>
        <ul>
          {alumni.map((val, key) => {
            return (
              <li key={key}>
                {val}
                <Button className="m-1">Edit</Button>
                <Button
                  className="m-1"
                  variant="dark"
                  onClick={() => this.handleDelete(key)}
                >
                  hapus
                </Button>
              </li>
            );
          })}
        </ul>

        {/* <YearBookForm switchPage={switchPage} addAlumni={addAlumni} /> */}
      </>
    );
  }
}
