import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Omniverse from "./components/Omniverse/Omniverse";
import FAQ from "./components/FAQ/FAQ";
import NotFound from "./components/NotFound/NotFound";
import Privacy from "./components/Privacy/Privacy";
import Register from "./components/Register/Register";
import Confirmation from "./components/Confirmation/Confirmation";
import Auth from "./components/Auth/Auth";
import Status from "./components/Status/Status";
import Users from "./components/Users/Users";
import Discord from "./components/Discord/Discord";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/omniverse"} exact component={Omniverse} />
        <Route path={"/faq"} exact component={FAQ} />
        <Route path={"/register"} exact component={Register} />
        <Route path={"/privacy"} exact component={Privacy} />
        <Route path={"/confirmation/:token"} exact component={Confirmation} />
        <Route path={"/auth"} exact component={Auth} />
        <Route path={"/status"} exact component={Status} />
        <Route path={"/users"} exact component={Users} />
        <Route path={"/discord"} exact component={Discord} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
