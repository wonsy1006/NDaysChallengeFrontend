import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
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
  } = useForm({ resolver: yupResolver(schema) });

  const [data, setData] = useState('');

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login');
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile');
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);

    if (data.pw !== data.pwCheck) {
      alert('패스워드가 일치하지 않습니다.');
    }

    dispatch(userSignUp(data));
    // axios
    //   .post('http://localhost:8080/auth/signup', data, {
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="이메일" />
        <StyledInput {...register('id')} type="email" />
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
        <InputLabel label="닉네임" />
        <StyledInput {...register('nickname')} type="text" />
        <ErrorMessage>{errors.nickname?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="프로필 사진 선택" />
        <RadioWrapper>
          <Radio
            {...register('image')}
            type="radio"
            value="1"
            id="pic1"
            defaultChecked
          />
          <ProfileLabel htmlFor="pic1">
            <ProfilePic picType="pic1" />
          </ProfileLabel>
          <Radio {...register('image')} type="radio" value="pic2" id="pic2" />
          <ProfileLabel htmlFor="pic2">
            <ProfilePic picType="pic2" />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic3"
            id="pic3"
          />
          <ProfileLabel htmlFor="pic3">
            <ProfilePic picType="pic3" />
          </ProfileLabel>
          <Radio {...register('image')} type="radio" value="pic4" id="pic4" />
          <ProfileLabel htmlFor="pic4">
            <ProfilePic picType="pic4" />
          </ProfileLabel>
          <Radio {...register('image')} type="radio" value="pic5" id="pic5" />
          <ProfileLabel htmlFor="pic5">
            <ProfilePic picType="pic5" />
          </ProfileLabel>
          <Radio {...register('image')} type="radio" value="pic6" id="pic6" />
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
