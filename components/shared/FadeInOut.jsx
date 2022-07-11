import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledFadeInOut = styled.div`
  height: auto;
  width: auto;

  animation: ${fade} 0.5s ease;

  .fade {
    animation: ${fade} 0.5s ease reverse;
  }

  .hide {
    display: none;
  }
`;

const FadeInOut = ({ duration, children }) => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const fadeRef = useRef(undefined);

  const fadeOut = (ref, callback) => {
    ref.current.classList.toggle("fade");
    callback();
  };

  const startFadeOut = () => setShouldFadeOut(true);

  useEffect(() => {
    return shouldFadeOut
      ? fadeOut(fadeRef, () => {
          setInterval(() => {
            fadeRef.current.classList.add("hide");
          }, 500);
        })
      : null;
  }, [shouldFadeOut]);

  return (
    <StyledFadeInOut ref={fadeRef}>
      <children />
    </StyledFadeInOut>
  );
};

export default FadeInOut;
