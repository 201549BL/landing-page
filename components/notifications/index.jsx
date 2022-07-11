import React, { useRef } from "react";
import styled from "styled-components";
import Notification from "./Notification";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  AnimateSharedLayout,
} from "framer-motion";

const StyledNotificationsContainer = styled(motion.ul)`
  position: fixed;
  width: 50vw;

  max-width: 600px;
  z-index: 1;

  padding: 1rem;
  gap: 0.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100vw;

    padding: 0;
    gap: 0;
  }
`;

const Notifications = ({ notifications }) => {
  return (
    <StyledNotificationsContainer
      style={{ visibility: notifications.length ? "visible" : "hidden" }}
    >
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification {...n} key={n.key} />
        ))}
      </AnimatePresence>
    </StyledNotificationsContainer>
  );
};

export default Notifications;
