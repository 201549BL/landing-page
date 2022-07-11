import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  flex: 0 0 auto;
  background-color: #525252;

  width: 100%;

  color: white;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;

  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
      <div>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
