import React from "react";
import StarbucksNav from "./components/StarbucksNav";
import StarbucksFooter from "./components/StarbucksFooter";
import Rewards from "./pages/Rewards.page";
import Gifts from "./pages/Gifts.page";
import NotFound from "./pages/NotFound.page";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <StarbucksNav />
        <Switch>
          <Redirect from="/" to="/rewards" exact></Redirect>
          <Route path="/rewards">
            <Rewards />
          </Route>
          <Route path="/gifts">
            <Gifts />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <StarbucksFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
