import React from 'react';
import { Router, Route, Switch } from "react-router-dom"
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history"
// import Plebisite from "./components/Plebisite";
// import Loading from "./components/Loading";
// import LogoHomeButton from "./components/LogoHomeButton";
import SenateListing from "./views/SenateListing";
// import MemberDetail from "./components/MemberDetail";
import Footer from "./components/Footer";
import Home from "./views/Home"

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history} >
      <NavBar />
      <Container > 
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/Senate" component={SenateListing} />
          <Route />
          <Route />
        </Switch>
      </Container>
      <Footer />
      </Router>
  );
}

export default App;

//the biggest russian nesting doll
//deleted everything inside the main div