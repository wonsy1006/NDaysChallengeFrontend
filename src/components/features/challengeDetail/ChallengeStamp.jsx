import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { openModal } from '../../../app/module/modalSlice';
import ChallengeModal from './ChallengeModal';
import styled from 'styled-components';
import Card from '../../common/Card';
import Stamp from '../../common/Stamp';

const ChallengeStamp = (props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const currentDay = props.currentDay;
  const params = useParams();

  const numberOfStamp = parseInt(props.content.totalDays);

  const [stampInfo, setStampInfo] = useState([]);

  useEffect(() => {
    setStampInfo((prevState) => {
      if (!props.content.day) {
        return Array.from({ length: numberOfStamp }, () => 'unchecked');
      } else {
        const days = props.content.day.split('');
        const remainingDays = numberOfStamp - days.length;
        const fillers = Array.from(
          { length: remainingDays },
          () => 'unchecked',
        );
        const filledDays = days.map((day) => {
          if (day === 'o') {
            return 'success';
          } else if (day === 'x') {
            return 'pass';
          } else {
            return 'unchecked';
          }
        });
        return [...filledDays, ...fillers];
      }
    });
  }, [numberOfStamp, props.content.day]);

  const stamps = Array.from({ length: numberOfStamp }, (n, index) => {
    const leftPad = (num) => {
      return num.toString().padStart(2, '0');
    };

    const day = Array.from({ length: numberOfStamp }, (v, i) =>
      i < 10 ? leftPad(i + 1) : i + 1,
    );

    return (
      <Stamp
        status={stampInfo[index]}
        day={day[index]}
        key={index + 1}
        onClick={() => dispatch(openModal())}
      />
    );
  });

  return (
    <>
      {isOpen && (
        <ChallengeModal
          content={props.content}
          stampInfo={stampInfo}
          currentDay={currentDay}
        />
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
