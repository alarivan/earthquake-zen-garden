import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import response from "./fetch/data";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Layout
        site={response.site}
        profile={response.profile}
        pageTitle={response.data.metadata.title}
      >
        <Switch>
          <Route path="/profile">
            <div>profile</div>
          </Route>
          <Route path="/details/:featureId">
            <div>details</div>
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
