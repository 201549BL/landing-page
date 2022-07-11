import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import BulletPoints from "./BulletPoints";
import PriceBox from "./PriceBox";

const StyledPricing = styled.section`
  height: auto;

  width: 100%;

  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
`;

const defaultProps = [
  {
    int: "12",
    dec: "34",
    currency: "kr",
    topTag: "Popular",
    title: "Economic",
  },
  {
    int: "200",
    dec: "01",
    currency: "$",

    title: "Comfort",
  },
  { int: "420", dec: "", currency: "€", title: "Deluxe" },
];

const Pricing = ({ prices = defaultProps }) => {
  const renderPriceBoxes = () =>
    prices.map((p, i) => <PriceBox key={i} {...p} />);

  return <StyledPricing>{renderPriceBoxes()}</StyledPricing>;
};

export default Pricing;
