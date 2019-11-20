import React from "react";
import Navbar from "../Navbar";

function Question3() {
  return (
    <div className="container">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Entered by?</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Polling Unit ID</label>
            <input
              type="text"
              class="form-control"
              placeholder="ID"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Select Party</label>
            <select class="form-control">
              <option>Select Party</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Party Score</label>
            <input
              type="text"
              class="form-control"
              placeholder="Score"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Question3;
