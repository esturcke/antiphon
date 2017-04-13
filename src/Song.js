// @flow
import React from "react";
import styled from "styled-components";
import type { ContextRouter } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Song = ({ match }: ContextRouter) => (
  <Wrapper>Hi! {match.params.id}</Wrapper>
);

export default Song;
