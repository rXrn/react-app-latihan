import { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { YearBookForm } from "./YearBookForm";
import { YearBookList } from "./YearBookList";

export class YearBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "list",
      alumni: ["Jono", "Lemonade"],
    };

    this.switchPage = this.switchPage.bind(this);
    this.addAlumni = this.addAlumni.bind(this);
    this.deleteAlumni = this.deleteAlumni.bind(this);
  }

  addAlumni(nama) {
    let temp = this.state.alumni;
    temp.push(nama);
    this.setState({ alumni: temp });
  }

  deleteAlumni(index) {
    let temp = this.state.alumni;
    temp.splice(index, 1);
    this.setState({ alumni: temp });
  }

  editAlumni(index) {}

  switchPage() {
    this.setState({
      page: this.state.page === "list" ? "form" : "list",
    });
  }

  render() {
    return (
      <>
        <div className="my-2">
          <button className="btn btn-dark" onClick={() => this.switchPage()}>
            Switch Page
          </button>
          <h2>Year Book Component</h2>
          {this.state.page === "list" ? (
            <YearBookList
              switchPage={this.switchPage}
              addAlumni={this.addAlumni}
              alumni={this.state.alumni}
              deleteAlumni={this.deleteAlumni}
            />
          ) : (
            <YearBookForm
              switchPage={this.switchPage}
              addAlumni={this.addAlumni}
              alumni={this.state.alumni}
              deleteAlumni={this.deleteAlumni}
            />
          )}
        </div>
      </>
    );
  }
}
