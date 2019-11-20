import React from "react";
import Navbar from "../Navbar";

function Question1() {
  return (
    <div className="container">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Enter Polling Unit ID</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Polling Unit ID"
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

export default Question1;
