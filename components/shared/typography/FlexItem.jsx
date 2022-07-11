import styled from "styled-components";

export const FlexItem = styled.div`
  text-align: center;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  background: rgba(255, 255, 255, 70%);

  border-radius: 5px;

  align-self: ${({ alignSelf }) => alignSelf || "unset"};

  padding: 1rem;
`;
