import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";

class Question3 extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeEnteredBy = this.onChangeEnteredBy.bind(this);
    this.onChangePollingUnitID = this.onChangePollingUnitID.bind(this);
    this.onChangePartyScore = this.onChangePartyScore.bind(this);
    this.onChangePartyNameWithID = this.onChangePartyNameWithID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      enteredBy: "",
      pollingUnitID: "",
      partyScore: "",
      partyNameWithID: "",
      error: false,
      success: false,
      lgas: []
    };
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

  onChangePollingUnitID(e) {
    this.setState({ pollingUnitID: e.target.value });
  }

  onChangeEnteredBy(e) {
    this.setState({ enteredBy: e.target.value });
  }

  onChangePartyScore(e) {
    this.setState({ partyScore: e.target.value });
  }

  onChangePartyNameWithID(e) {
    this.setState({ partyNameWithID: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const pollData = {
      result_id: Math.ceil(Math.random() * 10000),
      partyNameWithID: this.state.partyNameWithID,
      pollingUnitID: this.state.pollingUnitID,
      partyScore: this.state.partyScore,
      enteredBy: this.state.enteredBy
    };

    let URL = `/pollresults/create-poll`;
    axios
      .post(URL, pollData)
      .then(res => {
        this.setState({ success: res.data.success });
        console.log(res.data);
      })
      .catch(err => {
        this.setState({ error: true });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        {this.state.error ? (
          <div className="alert alert-danger" role="alert">
            Your poll data could not be submitted, please try again later
          </div>
        ) : (
          ""
        )}
        {this.state.success ? (
          <div className="alert alert-success" role="alert">
            Poll submission successfull!
          </div>
        ) : (
          ""
        )}
        <div className="d-flex justify-content-center align-items-center container">
          <form>
            <div className="form-group">
              <label>Entered by?</label>
              <input
                type="text"
                value={this.state.enteredBy}
                onChange={this.onChangeEnteredBy}
                name="enteredBy"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Polling Unit ID</label>
              <input
                type="text"
                value={this.state.pollingUnitID}
                onChange={this.onChangePollingUnitID}
                name="pollingUnitID"
                className="form-control"
                placeholder="ID"
              />
            </div>
            <div className="form-group">
              <label>Enter Party Name</label>
              <input
                type="text"
                value={this.state.partyNameWithID}
                onChange={this.onChangePartyNameWithID}
                name="partyNameWithID"
                className="form-control"
                placeholder="Party Name"
              />
            </div>
            <div className="form-group">
              <label>Party Score</label>
              <input
                type="text"
                value={this.state.partyScore}
                onChange={this.onChangePartyScore}
                name="partyScore"
                className="form-control"
                placeholder="Score"
              />
            </div>
            <button
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Question3;
