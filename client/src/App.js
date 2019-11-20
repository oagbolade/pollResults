import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Question1 from "./components/questions/Question1";
import Question2 from "./components/questions/Question2";
import Question3 from "./components/questions/Question3";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Question1} />
          <Route path="/question2" component={Question2} />
          <Route path="/question3" component={Question3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
