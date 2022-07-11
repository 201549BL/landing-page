import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  overflow: hidden;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
