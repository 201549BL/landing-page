import React from "react";
import styled, { useTheme } from "styled-components";

import { paddingAndMargin } from "../../styles/mixins/paddingandmargin";
import { FlexContainer } from "../shared/typography/Flex";
import { FlexItem } from "../shared/typography/FlexItem";
import Text from "../shared/typography/Text";

const StyledInfotainer = styled.section`
  position: relative;

  display: grid;
  gap: 1rem;

  background: #ddd;
  width: 100%;

  padding: 1rem;

  background: ${({ theme }) => theme.colors.cerulean.two};

  z-index: 0;

  border-radius: 5px;
`;

const MagentaText = styled(Text)`
  color: ${({ theme }) => theme.colors.magenta.three};
`;

const Infotainer = () => {
  const theme = useTheme();

  return (
    <StyledInfotainer>
      <FlexContainer column alignCenter padding="1rem" gap="1rem">
        <Text as="span" fontSize=".9rem" padding="0.3rem 0.9rem">
          Numbers
        </Text>
        <Text as="h1" align="center" fontSize="2rem" weight="bolder">
          We believe in the power of data
        </Text>
        <Text as="p" align="center" maxWidth="40ch">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          asperiores neque eius, vitae adipisci beatae!
        </Text>
      </FlexContainer>
      <FlexContainer row justifyCenter wrap gap="1rem">
        <FlexItem>
          <MagentaText as="h2">235.000</MagentaText>
          <Text as="p">Projects completed</Text>
        </FlexItem>
        <FlexItem>
          <MagentaText as="h2">$10m</MagentaText>
          <Text as="p">APR</Text>
        </FlexItem>
        <FlexItem>
          <MagentaText as="h2">3500</MagentaText>
          <Text as="p">Unique users</Text>
        </FlexItem>
        <FlexItem>
          <MagentaText as="h2">+50.000</MagentaText>
          <Text as="p">Hours saved annually</Text>
        </FlexItem>
      </FlexContainer>
    </StyledInfotainer>
  );
};

export default Infotainer;
