import React from "react";
import Navbar from "../Navbar";

function Question2() {
  return (
    <div className="container">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center container">
        <form>
          <div class="form-group">
            <select class="form-control form-control-lg">
              <option>Large select</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Question2;
