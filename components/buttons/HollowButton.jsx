import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline;

  background: ${({ theme }) => theme.colors.magenta.three}20;

  border: ${({ theme }) => theme.colors.magenta.three} 2px solid;
  border-radius: 25rem;
  padding: 0.5rem 1rem;
  font-size: ${({ size }) => size};

  color: ${({ textColor }) => textColor};

  height: fit-content;
  width: fit-content;

  cursor: pointer;
`;

const HollowButton = ({ children, textColor = "black", size = "1rem" }) => {
  return <StyledButton textColor={textColor}>{children}</StyledButton>;
};

export default HollowButton;
