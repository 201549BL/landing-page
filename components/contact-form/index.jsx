import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { FiAtSign } from "react-icons/fi";
import { IoSend, IoCheckmarkCircleOutline } from "react-icons/io5";

import { ImSpinner8 } from "react-icons/im";
import SpinHoc from "../shared/SpinHoc";
import { useNotificationsContext } from "../contexts/NotificationsContext";
import EmailSent from "../notifications/toasts/EmailSent";

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 0 auto;
`;

const Error = styled.div`
  align-self: flex-start;
  padding-left: 2rem;
  visibility: ${({ errors }) => (errors ? "visible" : "hidden")};
  color: ${({ theme }) => theme.colors.magenta.six};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  border-radius: 25px;
  overflow: hidden;

  background: ${({ errors, isSubmitSuccessful, theme }) =>
    errors
      ? theme.colors.rose.two
      : isSubmitSuccessful
      ? theme.colors.emerald.two
      : theme.colors.cerulean.two};

  transition: background 200ms ease;

  outline: ${({ isFocused, theme }) =>
    isFocused ? "1px solid " + theme.colors.magenta.three : "none"};
`;

const Icon = styled.div`
  height: 100%;
  flex: 0 0 15%;

  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: auto 0;

  font-size: 1.5rem;
`;

const Input = styled.input`
  flex: 1 1 70%;

  background: transparent;

  border: none;
  padding: 1rem 0;

  outline: none;

  font-size: 1.1rem;

  :focus {
    background-color: transparent;
  }
`;

const Button = styled.button`
  flex: 1 1 20%;
  display: flex;

  background: ${({ theme }) => theme.colors.cerulean.three};
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.cerulean.one};

  transition: all 0.3s ease;

  border: none;
`;

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

const ContactForm = () => {
  const [isFocused, setFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isSubmitted },
    reset,
  } = useForm();

  const { addNotification } = useNotificationsContext();

  const onSubmit = async (data) => {
    await sleep(1000);
    console.log(data);
  };

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    addNotification({
      content: <EmailSent />,
      bgColor: "lightgreen",
      life: 5000,
      duration: 700,
      key: Math.random() * 10000,
      id: Math.random() * 10000,
    });

    setTimeout(() => {
      reset();
    }, 3000);
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <Error errors={errors.email}>
        {errors?.email?.message || "error-message"}
      </Error>
      <Container
        errors={errors.email}
        isFocused={isFocused}
        isSubmitSuccessful={isSubmitSuccessful}
      >
        <Icon>
          <FiAtSign />
        </Icon>
        <Input
          placeholder="ola@nordmann.no"
          onFocus={() => setFocused(true)}
          {...register("email", {
            onBlur: () => setFocused(false),
            required: "Required field",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Must be an valid email address",
            },
          })}
        />
        <Button disabled={isSubmitting ? true : false}>
          {isSubmitting ? (
            <SpinHoc>
              <ImSpinner8 />
            </SpinHoc>
          ) : isSubmitSuccessful ? (
            <IoCheckmarkCircleOutline />
          ) : (
            <IoSend />
          )}
        </Button>
      </Container>
    </StyledContactForm>
  );
};

export default ContactForm;
