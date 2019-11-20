import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";

class Question1 extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangePollingUnitID = this.onChangePollingUnitID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      pollingUnitID: "",
      polls: []
    };
  }

  onChangePollingUnitID(e) {
    this.setState({ pollingUnitID: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let URL = `/pollresults/get-individual-polls/${this.state.pollingUnitID}`;
    axios
      .get(URL)
      .then(res => {
        this.setState({
          polls: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let DataTable = null;

    if (this.state.polls.length > 0) {
      let counter = 1;
      DataTable = this.state.polls.map(poll => {
        return (
          <tr key={poll.result_id}>
            <td>{counter++}</td>
            <td>{poll.party_abbreviation}</td>
            <td>{poll.party_score}</td>
          </tr>
        );
      });
    }

    return (
      <div className="container">
        <Navbar />
        <div className="d-flex justify-content-center align-items-center container">
          <form>
            <div className="form-group">
              <label>Enter Polling Unit ID</label>
              <input
                type="text"
                name="pollingUnitID"
                value={this.state.pollingUnitID}
                onChange={this.onChangePollingUnitID}
                className="form-control"
                placeholder="Polling Unit ID"
              />
            </div>
            <button onClick={this.onSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {DataTable ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Party Name</th>
                <th scope="col">Party Score</th>
              </tr>
            </thead>
            <tbody>{DataTable}</tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Question1;
