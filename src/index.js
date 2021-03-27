import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routesConfig";
import { Main } from "./Main";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path={routes.PATIENTFORM} render={() => <div>Form</div>} />
        <Route path={routes.PATIENTLIST} render={() => <div>List</div>} />
        <Route exact path={routes.MAIN} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
