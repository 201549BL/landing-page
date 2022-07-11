import React from "react";
import styled from "styled-components";
import { hover } from "../../styles/animations/hover";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.magenta.three};

  border: none;
  border-radius: 25rem;
  padding: 1rem 2rem;
  font-size: 1rem;

  color: white;

  cursor: pointer;

  :hover {
    animation: ${hover()} 2s ease infinite;
  }
`;

const defaultProps = {};

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
