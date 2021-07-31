import React from "react";
import Nav from "./components/Nav";
import Rewards from "./pages/Rewards.page";
import Gifts from "./pages/Gifts.page";
import NotFound from "./pages/NotFound.page";

import { BrowserRouter, Route, Switch } from "react-router-dom";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
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
      </BrowserRouter>
    </>
  );
};

export default App;
