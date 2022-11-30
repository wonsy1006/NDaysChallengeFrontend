import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { StyledInput, InputLabel } from '../../common/Input';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import Button from '../../common/Button';

const ChallengeDajimForm = ({ getBackToEditMode, getDajimContent }) => {
  const { register, resetField, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);

    resetField('openRange');
    resetField('dajimContent');

    // axios
    //   .post('http://localhost:8080/api/dajim', data, {
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });

    getDajimContent(data.dajimContent);
    getBackToEditMode(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper>
        <InputLabel label="공개 여부" />
        <RadioWrapper>
          <Radio
            {...register('openRange')}
            type="radio"
            value="public"
            id="public"
            defaultChecked
          />
          <RadioLabel htmlFor="public">전체 공개</RadioLabel>
          <Radio
            {...register('openRange')}
            type="radio"
            value="openToFriends"
            id="openToFriends"
          />
          <RadioLabel htmlFor="openToFriends">친구 공개</RadioLabel>
          <Radio
            {...register('openRange')}
            type="radio"
            value="closed"
            id="closed"
          />
          <RadioLabel htmlFor="closed">비공개</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper alignItems="flex-start" margin="0 auto">
        <InputLabel label="다짐 내용" />
        <StyledInput {...register('dajimContent')} type="text" />
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button small type="submit">
          등록
        </Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default ChallengeDajimForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.6rem auto;
`;

const DajimFormLabel = styled(InputLabel)`
  font-size: ${({ theme }) => theme.fonts.size.small};
`;

const RadioWrapper = styled(RowWrapper)`
  width: 95%;
  margin: 0 auto 2rem;
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
  padding: 0.8rem 2.8rem;
  border: 1px solid ${({ theme }) => theme.colors.bl500};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.bl500};

  &:hover {
    border: 1px solid #2e73ac;
    background: #2e73ac;
    color: #fff;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  top: -1.6rem;
  right: 0;
  left: 0;
  bottom: 0;

  margin-right: 3rem;

  & > * {
    cursor: pointer;
  }
`;
