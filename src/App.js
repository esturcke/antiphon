// @flow
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import SongSheet from "./SongSheet";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Hi = () => <Wrapper>Hi!</Wrapper>;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Hi} />
      <Route path="/song/:id" component={SongSheet} />
    </div>
  </Router>
);

export default App;
