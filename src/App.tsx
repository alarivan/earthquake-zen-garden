import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import response from "./fetch/data";
import Layout from "./components/Layout";
import Profile from "./routes/Profile";
import Details from "./routes/Details";
import Home from "./routes/Home";

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
            <Details
              features={response.data.features}
              setPageTitle={setPageTitle}
            />
          </Route>
          <Route path="/">
            <Home
              features={response.data.features}
              title={response.data.metadata.title}
              setPageTitle={setPageTitle}
            />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
