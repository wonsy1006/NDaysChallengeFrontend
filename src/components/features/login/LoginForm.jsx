import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../app/module/userSlice';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    id: yup
      .string()
      .email('올바른 이메일 형식인지 확인해 주세요.')
      .required('이메일을 입력해 주세요.'),
    pw: yup
      .string()
      .required('패스워드를 입력해 주세요.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        '',
        '비밀번호는 8자 이상이어야 하며 영문 대/소문자, 숫자, 특수문자를 각각 하나 이상 포함해야 합니다.',
      ),
  });

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [data, setData] = useState('');

  const submitForm = data => {
    setData(JSON.stringify(data));

    dispatch(userLogin(data));

    resetField('id');
    resetField('pw');
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper margin="0 auto 1rem">
        <InputLabel label="이메일" />
        <StyledInput type="email" {...register('id')} />
      </ColumnWrapper>
      <ErrorMessage>{errors.id?.message}</ErrorMessage>
      <ColumnWrapper margin="0 auto 1rem">
        <InputLabel label="비밀번호" />
        <StyledInput type="password" {...register('pw')} />
      </ColumnWrapper>
      <ErrorMessage>{errors.pw?.message}</ErrorMessage>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <ErrorMessage></ErrorMessage>
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
  width: 90%;
  margin: 0 auto 2.4rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.rd};
`;
