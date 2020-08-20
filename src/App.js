import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacts from "./components/Contacts";
import ContactDetail from "./components/ContactDetail";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-md-8 offset-md-1">
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/ContactDetail/:id" component={ContactDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
