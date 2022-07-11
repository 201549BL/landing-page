import React from "react";
import styled from "styled-components";
import { heightAndWidth } from "../../../styles/mixins/heightandwidth";

const variants = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
const alignments = ["center", "start", "end", "left", "right", "justify"];
const weights = ["bolder", "bold", "light", "lighter"];

const StyledText = styled.div`
  text-align: ${({ align }) => align || "unset"};
  font-size: ${({ fontSize }) => fontSize};

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  font-weight: ${({ weight }) => weight};

  ${heightAndWidth};
`;

const Text = ({ as, children, ...props }) => {
  const { align, weight } = props;

  if (align && !alignments.some((a) => a === align))
    throw new Error(`${align} is not at valid text-align keyword`);

  if (!variants.some((v) => v === as))
    throw new Error("Must supply valid text tag");

  if (weight && !weights.some((w) => w === weight))
    throw new Error(`${weight} is not a valid argument for font-weight.`);

  return (
    <StyledText as={as} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
