import styled from "styled-components";
import { paddingAndMargin } from "../../../styles/mixins/paddingandmargin";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ column, row }) =>
    column ? "column" : row ? "row" : "unset"};

  flex-wrap: ${({ wrap, nowrap, reverse }) =>
    wrap ? "wrap" : nowrap ? "nowrap" : reverse ? "reverse" : "unset"};

  align-items: ${({ stretch, start, end, alignCenter }) =>
    stretch
      ? "stretch"
      : start
      ? "start"
      : end
      ? "end"
      : alignCenter
      ? "center"
      : "unset"};

  justify-content: ${({
    left,
    right,
    justifyCenter,
    spaceBetween,
    spaceAround,
    spaceEvenly,
  }) =>
    left
      ? "left"
      : right
      ? "right"
      : justifyCenter
      ? "center"
      : spaceBetween
      ? "space-between"
      : spaceAround
      ? "space-around"
      : spaceEvenly
      ? "space-evenly"
      : "unset"};

  gap: ${({ gap }) => gap || "unset"};

  border-radius: ${({ radius }) => radius || "unset"};

  width: 100%;
  height: 100%;

  ${paddingAndMargin}
`;
