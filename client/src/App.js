import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LangingPage";
import UserPostForm from "./components/UserPostForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <LandingPage />
        </Route>
        <Route exact path={"/userpostform"} component={UserPostForm} />

      </Switch>
    </Router>
  );
}

export default App;