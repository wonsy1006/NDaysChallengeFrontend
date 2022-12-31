import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../app/module/modalSlice';
import ChallengeModal from './ChallengeModal';
import styled from 'styled-components';
import Card from '../../common/Card';
import Stamp from '../../common/Stamp';

const ChallengeStamp = (props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const [status, setStatus] = useState('unchecked');

  const numberOfStamp = parseInt(props.content.totalDays);
  const leftPad = (num) => {
    return num.toString().padStart(2, '0');
  };

  const stamps = [...Array(numberOfStamp)].map((n, index) => {
    const day = [...Array(numberOfStamp)].map((v, i) =>
      i < 10 ? leftPad(i + 1) : i + 1,
    );
    return (
      <Stamp
        status={status}
        day={day[index]}
        key={index}
        changeStatus={changeStatus}
        onClick={() => dispatch(openModal())}
      />
    );
  });

  // console.log(stamps);
  // const stamp = stamps.find((stamp) => stamp.key === '1');
  // console.log(stamp);
  // stamp.props.status = 'success';

  const changeStatus = (currentDay, status) => {
    const stamp = stamps.find((stamp) => stamp.key === currentDay.toString());
    console.log(stamp);
    stamp.props.status = status;
  };

  return (
    <>
      {isOpen && (
        <ChallengeModal content={props.content} currentDay={props.currentDay} />
      )}
      <Card>
        <StampTitle>✔️ 챌린지 진척도</StampTitle>
        <StampArea>{stamps}</StampArea>
      </Card>
    </>
  );
};

export default ChallengeStamp;

const StampTitle = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.family.primary};
`;

const StampArea = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem auto;
`;
