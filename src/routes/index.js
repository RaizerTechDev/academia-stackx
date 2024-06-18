import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UIComponents from "../components/UIComponents";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UIComponents} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
