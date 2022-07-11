import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  flex: 0 0;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0 1rem;
  padding-bottom: 1rem;

  gap: 15rem;

  width: 100%;
  max-width: 1000px;
  padding-bottom: 15rem;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
