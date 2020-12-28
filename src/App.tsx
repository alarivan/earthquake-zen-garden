import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import response from "./fetch/data";
import Layout from "./components/Layout";
import Profile from "./routes/Profile";

export default function App() {
  const [pageTitle, setPageTitle] = useState(response.data.metadata.title);

  return (
    <Router>
      <Layout
        site={response.site}
        profile={response.profile}
        pageTitle={pageTitle}
      >
        <Switch>
          <Route path="/profile">
            <Profile profile={response.profile} setPageTitle={setPageTitle} />
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
