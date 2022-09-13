import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { YearBook } from "./YearBook";

export class YearBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: Boolean(props.selectedAlumni),
      name: props.selectedAlumni || "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const temp = event.target.value;

    this.setState({ name: temp });
    console.log(this.state.name);
  }

  handleSubmit(event) {
    const { addAlumni, switchPage } = this.props;
    event.preventDefault();

    if (this.state.isEdit) {
      this.props.updateAlumni(this.state.name);
    } else {
      this.props.addAlumni(this.state.name);
    }
    switchPage(); //testing
  }

  render() {
    const { switchPage } = this.props;
    return (
      <>
        <p>Year Book Form</p>
        <Form>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Nama Alumni"
              onChange={(e) => this.handleOnChange(e)}
            />
            <button
              value="submit"
              type="submit"
              className="btn btn-dark"
              onClick={(e) => this.handleSubmit(e)}
            >
              Simpan
            </button>
            <button className="btn btn-dark" onClick={() => switchPage()}>
              Open List
            </button>
          </div>
        </Form>
      </>
    );
  }
}
