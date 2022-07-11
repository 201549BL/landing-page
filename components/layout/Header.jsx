import React from "react";
import styled, { keyframes } from "styled-components";
import { BiHappyBeaming } from "react-icons/bi";
import { hover } from "../../styles/animations/hover";
import HollowButton from "../buttons/HollowButton";

const StyledHeader = styled.header`
  background: transparent;
  flex: 0 0 3rem;

  color: black;

  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
  padding: 0 1rem;

  margin-bottom: 0.5rem;

  .logo {
    align-self: center;
    font-size: 1.5rem;

    .smile {
      align-self: end;
    }

    :hover {
      cursor: pointer;

      .smile {
        animation: ${hover()} 2s ease infinite;
      }
    }
  }

  .nav {
    display: flex;

    justify-content: right;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">LOGO</div>
      <nav className="nav">
        <HollowButton>Get started</HollowButton>
      </nav>
    </StyledHeader>
  );
};

export default Header;
