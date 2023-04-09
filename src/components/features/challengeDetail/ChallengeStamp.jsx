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

  const stampInfo = props.content.day;

  console.log(stampInfo.length);
  console.log(typeof stampInfo);

  // const stampInfo =
  //   props.content.day === ''
  //     ? Array.from({ length: numberOfStamp }, (str) => {
  //         return (str = 'unchecked');
  //       })
  //     : props.content.day;

  // const stampInfoArray = stampInfo.split('');

  const status =
    stampInfo === ''
      ? Array.from({ length: numberOfStamp }, (str) => {
          return (str = 'unchecked');
        })
      : stampInfo;
  // .map((str) => {
  //     if (str === 'o') {
  //       return (str = 'success');
  //     } else if (str === 'x') {
  //       return (str = 'pass');
  //     } else {
  //       return (str = 'unchecked');
  //     }
  //   });

  console.log(status);

  const changeStatus = (status, currentDay) => {};

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
        onClick={() => dispatch(openModal())}
      />
    );
  });

  console.log(stamps);
  const stamp = stamps.find((stamp) => stamp.key === '1');
  console.log(stamp);

  return (
    <>
      {isOpen && (
        <ChallengeModal content={props.content} currentDay={currentDay} />
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
