import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UIComponents from "../components/UIComponents";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UIComponents} />      
      
        {/* <Route path="/about" exact component={About} />
        <Route path="/plansAndPrices" exact component={PlansAndPrices} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
