import React from 'react';
import { Router } from "react-router-dom"
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
// import Jubotron from "./components/Jumbotron";
// import Loading from "./components/Loading";
// import LogoHomeButton from "./components/LogoHomeButton";
// import MemberCard from "./components/MemberCard";
// import MemberDetail from "./components/MemberDetail";
import Footer from "./components/Footer";
import Home from "./views/Home"

function App() {
  return (
    <>
      <NavBar />
      <Container> 
        <Home />
        {/* <Switch>
          <Route exact path="/" component={Home}/> 
          <Route />
          <Route />
          <Route />
        </Switch> */}
      </Container>
      <Footer />
      </>
  );
}

export default App;

//the biggest russian nesting doll
//deleted everything inside the main div