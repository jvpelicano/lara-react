import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexStudent from "./pages/IndexStudent";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexStudent} />
        <Route path="/add-student" component={AddStudent} />
      </Switch>
    </Router>
  );
}

export default App;
