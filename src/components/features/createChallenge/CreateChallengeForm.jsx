import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import { ArrowDownIcon } from '../../common/Icon';
import Button from '../../common/Button';
import axios from '../../../../node_modules/axios/index';

const CreateChallengeForm = () => {
  // 개인 챌린지 5개 이상일 경우 챌린지 유형 개인 버튼 비활성화

  const schema = yup.object().shape({
    challengeType: yup.string().required('챌린지 유형을 선택해 주세요'),
    challengeTitle: yup.string().required('챌린지 제목을 입력해 주세요'),
    challengeCategory: yup.string().required('챌린지 카테고리를 선택해 주세요'),
    challengePeriod: yup.string().required('챌린지 기간을 선택해 주세요'),
    challengeStartDate: yup.date().required('챌린지 시작일을 선택해 주세요'),
    challengePassCount: yup.number(),
    challengeReward: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);

    axios
      .post('http://localhost:8080/api/signUp', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const [startDate, setStartDate] = useState('');
  const getStartDate = (date) => {};

  const [showGroupInput, setShowGroupInput] = useState(false);
  const [showPassInput, setShowPassInput] = useState(false);
  const [showRewardInput, setShowRewardInput] = useState(false);

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 유형" />
        <RadioWrapper>
          <Radio
            {...register('challengeType')}
            type="radio"
            value="individual"
            id="individual"
            defaultChecked
          />
          <RadioLabel htmlFor="individual">개인</RadioLabel>
          <Radio
            {...register('challengeType')}
            type="radio"
            value="group"
            id="group"
          />
          <RadioLabel htmlFor="group">단체</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 이름" />
        <StyledInput
          {...register('challengeTitle', { required: true })}
          type="text"
        />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 카테고리" />
        <Select {...register('challengeCategory', { required: true })}>
          <Option value="">카테고리를 선택하세요</Option>
          <Option value="study">공부</Option>
          <Option value="workout">운동</Option>
          <Option value="hobby">취미</Option>
          <Option value="mentalcare">멘탈케어</Option>
          <Option value="etc">기타</Option>
        </Select>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="챌린지 기간" />
        <RadioWrapper>
          <Radio
            {...register('challengePeriod')}
            type="radio"
            value="14days"
            id="14days"
            defaultChecked
          />
          <RadioLabel htmlFor="14days">14일</RadioLabel>
          <Radio
            {...register('challengePeriod')}
            type="radio"
            value="30days"
            id="30days"
          />
          <RadioLabel htmlFor="30days">30일</RadioLabel>
          <Radio
            {...register('challengePeriod')}
            type="radio"
            value="60days"
            id="60days"
          />
          <RadioLabel htmlFor="60days">60일</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="시작일 선택" />
        <StyledInput
          {...register('challengeStartDate', { required: true })}
          type="date"
        />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="종료일" />
        <StyledInput
          {...register('challengeEndDate', { required: true })}
          type="date"
          disabled
          defaultValue={data.challengeStartDate}
        />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="패스 횟수 설정" />
        <RadioWrapper>
          <Radio
            {...register('challengePassSet')}
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
            {...register('challengePassSet')}
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
            {...register('challengePassCount')}
            id="challengePassCount"
            type="number"
          />
        ) : null}
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem auto">
        <InputLabel label="보상 설정" />
        <RadioWrapper>
          <Radio
            {...register('challengeRewardSet')}
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
            {...register('challengeRewardSet')}
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
            {...register('challengeReward')}
            id="challengeReward"
            type="text"
          />
        ) : null}
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button type="submit" primary>
          챌린지 생성
        </Button>
      </ColumnWrapper>
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
  margin: 0 auto 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 4.8rem;
  outline: none;

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

const RewardInput = styled(StyledInput)`
  margin-top: 0.5rem;
`;
