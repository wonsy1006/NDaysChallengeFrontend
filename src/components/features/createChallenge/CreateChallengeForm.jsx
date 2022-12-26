import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';
import { toStringByFormatting } from '../../../utils/Date';
import { useDispatch } from 'react-redux';
import { createChallenge } from '../../../app/module/challengeSlice';

const CreateChallengeForm = () => {
  const dispatch = useDispatch();
  // 개인 챌린지 5개 이상일 경우 챌린지 유형 개인 버튼 비활성화

  const schema = yup.object().shape({
    type: yup.string().required('챌린지 유형을 선택해 주세요'),
    name: yup
      .string()
      .required('챌린지 제목을 입력해 주세요')
      .max(30),
    category: yup.string().required('챌린지 카테고리를 선택해 주세요'),
    totalDays: yup.number().required('챌린지 기간을 선택해 주세요'),
    startDate: yup.date().required('챌린지 시작일을 선택해 주세요'),
    passCount: yup.number().min(0),
    reward: yup.string(),
    successCount: yup.number(),
    usedPassCount: yup.number(),
    memberNumber: yup.number(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [data, setData] = useState('');

  const submitForm = data => {
    data.startDate = toStringByFormatting(data.startDate);
    setData(JSON.stringify(data));
    console.log(data);

    dispatch(createChallenge(data));
  };

  useEffect(() => {});

  // const [startDate, setStartDate] = useState('');
  // const getStartDate = (date) => {};

  // const [showGroupInput, setShowGroupInput] = useState(false);
  const [showPassInput, setShowPassInput] = useState(false);
  const [showRewardInput, setShowRewardInput] = useState(false);

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <DisplayNoneWrapper>
        <ColumnWrapper margin="0 auto 2.4rem auto">
          <InputLabel label="챌린지 유형" />
          <RadioWrapper>
            <Radio
              {...register('type')}
              type="radio"
              value="SINGLE"
              id="SINGLE"
              defaultChecked
            />
            <RadioLabel htmlFor="SINGLE">개인</RadioLabel>
            <Radio
              {...register('type')}
              type="radio"
              value="GROUP"
              id="GROUP"
            />
            <RadioLabel htmlFor="GROUP">단체</RadioLabel>
          </RadioWrapper>
        </ColumnWrapper>
      </DisplayNoneWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 이름" />
        <StyledInput {...register('name', { required: true })} type="text" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 카테고리" />
        <Select {...register('category', { required: true })}>
          <Option value="">카테고리를 선택하세요</Option>
          <Option value="ROUTINE">일상생활</Option>
          <Option value="study">공부</Option>
          <Option value="workout">운동</Option>
          <Option value="hobby">취미</Option>
          <Option value="mindfulness">멘탈케어</Option>
          <Option value="etc">기타</Option>
        </Select>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 기간" />
        <RadioWrapper>
          <Radio
            {...register('totalDays', { valueAsNumber: true })}
            type="radio"
            value="14"
            id="14days"
            defaultChecked
          />
          <RadioLabel htmlFor="14days">14일</RadioLabel>
          <Radio
            {...register('totalDays', { valueAsNumber: true })}
            type="radio"
            value="30"
            id="30days"
          />
          <RadioLabel htmlFor="30days">30일</RadioLabel>
          <Radio
            {...register('totalDays', { valueAsNumber: true })}
            type="radio"
            value="60"
            id="60days"
          />
          <RadioLabel htmlFor="60days">60일</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="시작일 선택" />
        <StyledInput
          {...register('startDate', { required: true })}
          type="date"
        />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="패스 횟수 설정" />
        <RadioWrapper>
          <Radio
            {...register('passSet')}
            type="radio"
            value="unsetPass"
            id="unsetPass"
            defaultChecked
          />
          <RadioLabel
            htmlFor="unsetPass"
            onClick={() => {
              setShowPassInput(false);
            }}
          >
            미설정
          </RadioLabel>
          <Radio
            {...register('passSet')}
            type="radio"
            value="setPass"
            id="setPass"
          />
          <RadioLabel
            htmlFor="setPass"
            onClick={() => {
              setShowPassInput(true);
            }}
          >
            설정
          </RadioLabel>
        </RadioWrapper>
        {showPassInput ? (
          <PassInput
            {...register('passCount')}
            id="challengePassCount"
            type="number"
          />
        ) : (
          <DisplayNoneInput
            {...register('passCount')}
            id="challengePassCount"
            type="number"
            defaultValue={0}
          />
        )}
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="보상 설정" />
        <RadioWrapper>
          <Radio
            {...register('rewardSet')}
            type="radio"
            value="unsetReward"
            id="unsetReward"
            defaultChecked
          />
          <RadioLabel
            htmlFor="unsetReward"
            onClick={() => {
              setShowRewardInput(false);
            }}
          >
            미설정
          </RadioLabel>
          <Radio
            {...register('rewardSet')}
            type="radio"
            value="setReward"
            id="setReward"
          />
          <RadioLabel
            htmlFor="setReward"
            onClick={() => {
              setShowRewardInput(true);
            }}
          >
            설정
          </RadioLabel>
        </RadioWrapper>
        {showRewardInput ? (
          <RewardInput
            {...register('reward')}
            id="challengeReward"
            type="text"
          />
        ) : (
          <DisplayNoneInput
            {...register('reward')}
            id="challengeReward"
            type="text"
            defaultValue=""
          />
        )}
      </ColumnWrapper>
      <DisplayNoneWrapper>
        <StyledInput
          {...register('successCount', { valueAsNumber: true })}
          type="number"
          defaultValue="0"
        />
        <StyledInput
          {...register('usedPassCount', { valueAsNumber: true })}
          type="number"
          defaultValue="0"
        />
        <StyledInput
          {...register('memberNumber', { valueAsNumber: true })}
          type="number"
          defaultValue="5"
        />
        <StyledInput
          {...register('status')}
          type="text"
          defaultValue="CONTINUE"
        />
      </DisplayNoneWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button primary>챌린지 생성</Button>
      </ColumnWrapper>
      {errors.message}
    </StyledForm>
  );
};

export default CreateChallengeForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3.2rem 0;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-grow: 1;
  flex-wrap: no-wrap;
  width: 95%;
  margin: 0.6rem auto;
`;

const Radio = styled.input`
  appearance: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    background: ${({ theme }) => theme.colors.bl500};
    color: #fff;
  }
`;

const RadioLabel = styled.label`
  display: inline-block;
  padding: 1.2rem 3.2rem;
  border: 1px solid ${({ theme }) => theme.colors.bl500};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.bl500};

  &:hover {
    border: 1px solid #2e73ac;
    background: #2e73ac;
    color: #fff;
    cursor: pointer;
  }
`;

const Select = styled.select`
  width: 90%;
  font-size: 1.6rem;
  padding: 1.2rem 2rem;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 4.8rem;
  outline: none;
  appearance: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
  }
`;

const Option = styled.option`
  color: ${({ theme }) => theme.colors.gr300};
`;

const PassInput = styled(StyledInput)`
  margin-top: 0.5rem;
`;

const DisplayNoneInput = styled(StyledInput)`
  display: none;
`;

const RewardInput = styled(StyledInput)`
  margin-top: 0.5rem;
`;

const DisplayNoneWrapper = styled.div`
  display: none;
`;

const ErrorMessage = styled.p`
  width: 90%;
  margin: 0.8rem auto 1.6rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.rd};
`;
