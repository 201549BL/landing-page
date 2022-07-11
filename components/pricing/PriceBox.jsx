import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import BulletPoints, { StyledBulletPoint } from "./BulletPoints";

const StyledButton = styled(Button)`
  margin: 0 2.5rem;
`;

const StyledPriceBox = styled.div`
  position: relative;
  flex: 1 1 30%;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  background: ${({ theme }) => theme.colors.cerulean.two};

  text-align: center;
  border-radius: 5px;

  max-width: 300px;
  min-width: 250px;

  padding: 2.5rem 0;

  & ${StyledBulletPoint} {
    margin: 0 1rem;
  }
`;

const TopTag = styled.p`
  position: absolute;
  top: 0;

  left: 50%;

  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.colors.gray.six};
  color: white;

  padding: 0.3rem 0.9rem;
  border-radius: 50px;

  font-size: small;
`;

const Title = styled.h3`
  text-transform: capitalize;
  padding: 0 2.5rem;
`;

const StyledPriceTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2.5rem;

  .price {
    line-height: 1;

    &__curreny {
    }

    &__int {
      font-size: 3rem;
    }

    &__dec {
      align-self: flex-start;
    }
  }
`;

const PriceTag = ({ currency, int, dec }) => {
  return (
    <StyledPriceTag>
      <span className="price price__currency">{currency}</span>
      <span className="price price__int">{int}</span>
      <span className="price price__dec">{dec}</span>
    </StyledPriceTag>
  );
};

const PriceBox = ({ int, dec, currency, topTag, title = "Placeholder" }) => {
  return (
    <StyledPriceBox>
      {topTag ? <TopTag>{topTag}</TopTag> : ""}

      <Title>{title}</Title>
      <PriceTag currency={currency} int={int} dec={dec} />
      <StyledButton>Claim it</StyledButton>

      <BulletPoints
        points={[
          { title: "Monthly", price: "100", currency: "kr" },
          { title: "Yearly", price: "100", currency: "kr" },
          { title: "Money saved", price: "100", currency: "kr" },
        ]}
      ></BulletPoints>
    </StyledPriceBox>
  );
};

export default PriceBox;
