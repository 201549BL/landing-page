import React from "react";
import styled from "styled-components";
import { FiMail, FiX } from "react-icons/fi";
import { FlexContainer } from "../../shared/typography/Flex";
import Text from "../../shared/typography/Text";
import { FlexItem } from "../../shared/typography/FlexItem";

const StyledIconContainer = styled.div`
  border-radius: 50%;

  padding: 0.5rem;
`;

const EmailSent = () => {
  return (
    <FlexContainer row gap="1rem" alignCenter spaceBetween>
      <StyledIconContainer>
        <Text as="h2" style={{ lineHeight: 0 }} fontSize="1.2">
          <FiMail />
        </Text>
      </StyledIconContainer>
      <FlexContainer column>
        <Text as="p" fontSize="0.9rem" weight="bold">
          Success
        </Text>
        <Text as="p" fontSize="0.9rem">
          Email sent &#128526;
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
};

export default EmailSent;
