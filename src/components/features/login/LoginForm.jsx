import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../app/module/userSlice';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';

const LoginForm = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, resetField, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);

    dispatch(userLogin(data));

    resetField('email');
    resetField('password');
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/challenge-list');
  //   }
  // }, [navigate, userInfo]);

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper>
        <InputLabel label="이메일" />
        <StyledInput type="email" {...register('email')} />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="비밀번호" />
        <StyledInput type="password" {...register('password')} />
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button primary>로그인</Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.rd};
`;
