import React from "react";
import styled from "styled-components";
import { FiFacebook, FiTwitter, FiGithub, FiBookOpen } from "react-icons/fi";
import Button from "../buttons/Button";
import { useNotificationsContext } from "../contexts/NotificationsContext";
import { FlexContainer } from "../shared/typography/Flex";
import Text from "../shared/typography/Text";
import { FiMail } from "react-icons/fi";
import EmailSent from "../notifications/toasts/EmailSent";

const StackingContainer = styled.div`
  position: relative;
  width: 100%;

  z-index: 0;
`;

const StyledHero = styled.section`
  position: relative;
  display: flex;

  min-height: 20rem;
  width: 100%;

  background: linear-gradient(
    340deg,
    ${({ theme }) => theme.colors.magenta.three} 0%,
    ${({ theme }) => theme.colors.cerulean.three} 100%
  );

  border-radius: 5px;
  border-top-right-radius: 50% 50%;

  .text {
    flex: 0 0 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    order: 1;

    padding: 3rem 2rem;

    gap: 0.5rem;

    color: white;
    text-shadow: 1px 1px 50px #00000025;

    text-align: center;

    z-index: 0;

    h1 {
      font-size: 3rem;
    }

    .icons {
      display: flex;
      gap: 1rem;
      font-size: 1.5rem;
      padding: 0.5rem;
    }

    @media (max-width: 400px) {
      flex-basis: 90%;
    }
  }

  .image {
    position: relative;

    flex: 0 0 50%;

    order: 2;

    height: 100%;
    height: 50%;

    display: flex;
    justify-content: left;

    align-self: center;

    z-index: 0;

    img {
      object-fit: cover;
      width: 100%;
      transform: translateX(-10%);
    }

    @media (max-width: 600px) {
      transform: rotate(10deg);
    }
    @media (max-width: 400px) {
      align-self: unset;
      z-index: -1;
      transform: translateX(-30%);
    }
  }
`;

const Hero = () => {
  const { addNotification } = useNotificationsContext();

  return (
    <StackingContainer>
      <StyledHero>
        <div className="image">
          <img src="/undraw_superhero_kguv.svg" alt="sdf" />
        </div>
        <div className="text">
          <h1>Seize the day</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            corporis.
          </p>
          <Button>Learn More</Button>
          <div className="icons">
            <FiFacebook />
            <FiTwitter />
            <FiGithub />
          </div>
        </div>
      </StyledHero>

      <button
        onClick={() =>
          addNotification({
            content: <EmailSent />,
            bgColor: "lightgreen",
            life: 5000,
            duration: 700,
            key: Math.random() * 10000,
            id: Math.random() * 10000,
          })
        }
      >
        SUCCESS
      </button>
      <button
        onClick={() =>
          addNotification({
            content: <EmailSent />,
            bgColor: "pink",
            life: 5000,
            duration: 700,
            key: Math.random() * 10000,
            id: Math.random() * 10000,
          })
        }
      >
        DANGER
      </button>
    </StackingContainer>
  );
};

export default Hero;
