import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(359deg)
  }
`;

const StyledSpinHoc = styled.div`
  animation: ${spinAnimation} 1s linear infinite;
  line-height: 0;
`;

const SpinHoc = ({ children }) => {
  return <StyledSpinHoc>{children}</StyledSpinHoc>;
};

export default SpinHoc;
