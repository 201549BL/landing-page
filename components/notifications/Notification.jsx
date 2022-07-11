import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { useNotificationsContext } from "../contexts/NotificationsContext";
import Text from "../shared/typography/Text";

const StyledToast = styled(motion.li)`
  display: flex;
  background: ${({ bgColor }) => bgColor || "#dddddd"};

  padding: 0.5rem 1rem;

  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  width: 100%;
  min-width: fit-content;
  max-width: 600px;

  @media (max-width: 500px) {
    max-width: unset;

    border-radius: 0px;
  }
`;

const StyledIconContainer = styled.div`
  line-height: 0;

  align-self: center;
`;

const Notification = ({ content, ...props }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { removeNotification } = useNotificationsContext();

  useEffect(() => {
    setInterval(() => {
      setIsVisible(false);
    }, props.life);
  }, []);

  return (
    <StyledToast
      layout
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 0.7, bounce: 0.3 }}
      exit={{ opacity: 0, x: -100 }}
      {...props}
    >
      {content}
      <StyledIconContainer>
        <Text as="h2" alignCenter>
          <FiX onClick={() => removeNotification(props)} />
        </Text>
      </StyledIconContainer>
    </StyledToast>
  );
};

export default Notification;
