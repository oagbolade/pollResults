import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";

class Question2 extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangePartyNameWithID = this.onChangePartyNameWithID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      active: 2,
      partyNameWithID: "",
      lgas: [],
      polls: []
    };
  }

  onChangePartyNameWithID(e) {
    this.setState({ partyNameWithID: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let URL = `/pollresults/lga/${this.state.partyNameWithID}`;
    axios
      .get(URL)
      .then(res => {
        this.setState({ polls: res.data[0].data });
        //console.log(res.data[0].data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    let URL = `/pollresults/lgas`;
    axios
      .get(URL)
      .then(res => {
        this.setState({
          lgas: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let SelectOptions = null;

    if (this.state.lgas.length > 0) {
      SelectOptions = this.state.lgas.map(lga => {
        return (
          <option value={lga.lga_id} key={lga.lga_id}>
            {lga.lga_name}
          </option>
        );
      });
    }

    let DataTable = null;
    let partyScoreArray = [];
    let partScoreCounter = 0;

    if (this.state.polls.length > 0) {
      let counter = 1;
      DataTable = this.state.polls.map(poll => {
        partyScoreArray.push(Number(poll.party_score));
        partScoreCounter = partyScoreArray.reduce((a, b) => a + b, 0);
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
        <Navbar active={this.state.active} />
        <div className="d-flex justify-content-center align-items-center container">
          <form>
            <div className="form-group">
              <label>Select Party</label>
              <select
                onChange={this.onChangePartyNameWithID}
                name="partyNameWithID"
                className="form-control form-control-lg"
              >
                <option>Select Party</option>
                {SelectOptions}
              </select>
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
            <tbody>
              {DataTable}
              <tr>
                <td></td>
                <td></td>
                <td>
                  <b>Totol: {partScoreCounter}</b>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Question2;
