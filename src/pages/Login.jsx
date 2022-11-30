import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import LoginForm from '../components/features/login/LoginForm';

const Login = () => {
  return (
    <>
      <h2>로그인</h2>
      <LoginForm />
      <Separator>
        <StyledHr />
        <Or>또는</Or>
      </Separator>
      <ButtonContainer>
        <Button sub>카카오로 로그인</Button>
      </ButtonContainer>
      <SignUpContainer>
        <SignUpText>아직 계정이 없으신가요?</SignUpText>
        <SignUpLink to="/signup">회원가입</SignUpLink>
      </SignUpContainer>
    </>
  );
};

export default Login;

const Separator = styled.div`
  display: block;
  position: relative;
  width: 90%;
  margin: 1.6rem auto;
`;

const StyledHr = styled.hr`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Or = styled.p`
  display: block;
  padding: 1.2rem;
  margin: 0.8rem auto;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: ${({ theme }) => theme.colors.ye50};
  color: ${({ theme }) => theme.colors.gr400};
  font-size: ${({ theme }) => theme.fonts.size.small};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 3.2rem auto;
`;

const SignUpLink = styled(Link)`
  padding: 0.4rem;
  font-size: ${({ theme }) => theme.fonts.size.normal};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr400};
  color: ${({ theme }) => theme.colors.gr400};
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gr500};
    color: ${({ theme }) => theme.colors.gr500};
  }
`;

const SignUpText = styled.p`
  display: flex;
  justify-content: center;
  margin: 1.2rem auto;

  color: ${({ theme }) => theme.colors.gr400};
  font-size: ${({ theme }) => theme.fonts.size.small};
`;
