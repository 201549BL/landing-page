import styled, { keyframes } from "styled-components";

export const hover = (num = 5) => keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(${num}px); }
  100% { transform: translateY(0); }
  
  
`;
