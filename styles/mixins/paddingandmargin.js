import { css } from "styled-components";

export const paddingAndMargin = css`
  margin: ${({ margin }) => margin || "unset"};
  padding: ${({ padding }) => padding || "unset"};
`;
