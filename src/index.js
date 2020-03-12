import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";

import { Page1, Page2 } from "./pages";

const App = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/page-2" children={<Page2 />} />
          <Route path="/" children={<Page1 />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
