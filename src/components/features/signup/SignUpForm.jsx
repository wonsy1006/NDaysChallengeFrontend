import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';
import ProfilePic from '../../common/ProfilePic';
import { userSignUp } from '../../../app/module/userSlice';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user,
  );

  const schema = yup.object().shape({
    id: yup.string().required('이메일을 입력해 주세요.'),
    pw: yup
      .string()
      .required('패스워드를 입력해 주세요.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        '비밀번호는 8자 이상이어야 하며 영문 대/소문자, 숫자, 특수문자를 각각 하나 이상 포함해야 합니다.',
      ),
    pwCheck: yup
      .string()
      .required('입력하신 패스워드를 한 번 더 입력해 주세요.'),
    nickname: yup
      .string()
      .required('닉네임을 입력해 주세요.')
      .min(2, '2자 이상 입력해 주세요')
      .max(6, '6자 이하 입력해 주세요.'),
    image: yup.string().required('프로필 사진을 선택해 주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));

    if (data.pw !== data.pwCheck) {
      alert('패스워드가 일치하지 않습니다.');
    }

    dispatch(userSignUp(data));
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login');
    // redirect authenticated user to profile screen
  }, [navigate, userInfo, success]);

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper margin="0 auto 2.4rem">
        <ColumnWrapper position="relative">
          <InputLabel label="이메일" />
          <StyledInput {...register('id')} type="email" />
          <StyledSpan>이메일 중복 확인</StyledSpan>
        </ColumnWrapper>
        <ErrorMessage>{errors.id?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="비밀번호" />
        <StyledInput {...register('pw')} type="password" />
        <ErrorMessage>{errors.pw?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="비밀번호 확인" />
        <StyledInput {...register('pwCheck')} type="password" />
        <ErrorMessage>{errors.pwCheck?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <ColumnWrapper position="relative">
          <InputLabel label="닉네임" />
          <StyledInput {...register('nickname')} type="text" />
          <StyledSpan>닉네임 중복 확인</StyledSpan>
        </ColumnWrapper>
        <ErrorMessage>{errors.nickname?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="프로필 사진 선택" />
        <RadioWrapper>
          <Radio
            {...register('image', { valueAsNumber: true })}
            type="radio"
            value="1"
            id="pic1"
            defaultChecked
          />
          <ProfileLabel htmlFor="pic1">
            <ProfilePic picType="pic1" />
          </ProfileLabel>
          <Radio
            {...register('image', { valueAsNumber: true })}
            type="radio"
            value="2"
            id="pic2"
          />
          <ProfileLabel htmlFor="pic2">
            <ProfilePic picType="pic2" />
          </ProfileLabel>
          <Radio
            {...register('image', { valueAsNumber: true })}
            type="radio"
            value="3"
            id="pic3"
          />
          <ProfileLabel htmlFor="pic3">
            <ProfilePic picType="pic3" />
          </ProfileLabel>
          <Radio
            {...register('image', { valueAsNumber: true })}
            type="radio"
            value="4"
            id="pic4"
          />
          <ProfileLabel htmlFor="pic4">
            <ProfilePic picType="pic4" />
          </ProfileLabel>
          <Radio
            {...register('image', { valueAsNumber: true })}
            type="radio"
            value="5"
            id="pic5"
          />
          <ProfileLabel htmlFor="pic5">
            <ProfilePic picType="pic5" />
          </ProfileLabel>
          <Radio
            {...register('image', { valueAsNumber: true })}
            type="radio"
            value="6"
            id="pic6"
          />
          <ProfileLabel htmlFor="pic6">
            <ProfilePic picType="pic6" />
          </ProfileLabel>
        </RadioWrapper>
        <ErrorMessage>{errors.image?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button primary>회원가입</Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default SignUpForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  position: absolute;
  right: 4rem;
  bottom: 1.6rem;
  width: 11rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.bl500};
  cursor: pointer;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 95%;
  margin: 0.6rem auto;
`;

const Radio = styled.input`
  appearance: none;

  &:checked + label {
    border: 3px solid ${({ theme }) => theme.colors.gr400};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ProfileLabel = styled.label`
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50%;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.gr300};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  width: 90%;
  margin: 0.8rem auto 1.6rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.rd};
`;
