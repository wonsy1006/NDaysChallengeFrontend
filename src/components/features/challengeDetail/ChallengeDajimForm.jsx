import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { StyledInput, InputLabel } from '../../common/Input';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import Button from '../../common/Button';
import { patchDajim, createDajim } from '../../../app/module/dajimSlice';
import { useParams } from 'react-router-dom';

const ChallengeDajimForm = ({ getBackToEditMode }) => {
  const { register, resetField, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const params = useParams();
  const challengeId = parseInt(params.roomNumber);

  const { dajim } = useSelector((state) => state.dajim);

  const submitForm = (data) => {
    const open = data.open;
    data.open = open.toUpperCase();
    setData(JSON.stringify(data));

    if (dajim.dajimNumber) {
      dispatch(patchDajim(data));
    } else {
      dispatch(createDajim(data));
    }

    resetField('open');
    resetField('content');
    getBackToEditMode(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <DisplayNoneWrapper>
        <StyledInput
          {...register('dajimNumber', { valueAsNumber: true })}
          type="number"
          defaultValue={dajim.dajimNumber ? dajim.dajimNumber : ''}
        />
        <StyledInput
          {...register('challengeId', { valueAsNumber: true })}
          type="number"
          defaultValue={challengeId}
        />
      </DisplayNoneWrapper>
      <ColumnWrapper>
        <InputLabel label="공개 여부" />
        <RadioWrapper>
          <Radio
            {...register('open')}
            type="radio"
            value="public"
            id="public"
            defaultChecked
          />
          <RadioLabel htmlFor="public">전체 공개</RadioLabel>
          {/* <Radio
            {...register('openRange')}
            type="radio"
            value="openToFriends"
            id="openToFriends"
          />
          <RadioLabel htmlFor="openToFriends">친구 공개</RadioLabel> */}
          <Radio
            {...register('open')}
            type="radio"
            value="closed"
            id="closed"
          />
          <RadioLabel htmlFor="closed">비공개</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper alignItems="flex-start" margin="0 auto">
        <InputLabel label="다짐 내용" />
        <StyledInput {...register('content')} type="text" />
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button small>등록</Button>
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

const DisplayNoneWrapper = styled.div`
  display: none;
`;
