import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { openModal } from '../../../app/module/modalSlice';
import ChallengeModal from './ChallengeModal';
import styled from 'styled-components';
import Card from '../../common/Card';
import Stamp from '../../common/Stamp';
import { getChallengeDetail } from '../../../app/module/challengeSlice';

const ChallengeStamp = (props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const currentDay = props.currentDay;
  const params = useParams();
  const challengeId = parseInt(params.roomNumber);

  useEffect(() => {
    dispatch(getChallengeDetail(challengeId));
  }, [dispatch]);

  const { challengeDetail } = useSelector((state) => state.challenge);

  const numberOfStamp = parseInt(challengeDetail.totalDays);

  const [status, setStatus] = useState('unchecked');
  // const [stamps, setStamps] = useState();
  Array.from({ length: 10 }, (value, index) => index + 1);
  const stamps = Array.from({ length: numberOfStamp }, (n, index) => {
    const leftPad = (num) => {
      return num.toString().padStart(2, '0');
    };

    const day = Array.from({ length: numberOfStamp }, (v, i) =>
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
        <ChallengeModal content={challengeDetail} currentDay={currentDay} />
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
