import styled from "styled-components";

const StyledBulletPoints = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 0.25rem;
`;

export const StyledBulletPoint = styled.li`
  display: flex;
  justify-content: space-between;

  background: #ffffff80;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  font-size: smaller;
  text-align: left;

  ::first-letter {
    text-transform: uppercase;
  }
`;

import React from "react";

const BulletPoint = ({ title, price, currency }) => {
  return (
    <StyledBulletPoint>
      <span className="bullet-point__title">{title}</span>
      <div>
        <span>{price}</span>
        <span>{currency}</span>
      </div>
    </StyledBulletPoint>
  );
};

const BulletPoints = ({ points = [] }) => {
  const renderPoints = () =>
    points.map((p, i) => (
      <BulletPoint
        key={i}
        title={p.title}
        price={p.price}
        currency={p.currency}
      />
    ));

  return <StyledBulletPoints>{renderPoints()}</StyledBulletPoints>;
};

export default BulletPoints;
