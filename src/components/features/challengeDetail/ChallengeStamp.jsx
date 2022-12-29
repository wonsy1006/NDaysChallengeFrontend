import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../app/module/modalSlice';
import styled from 'styled-components';
import Card from '../../common/Card';
import Stamp from '../../common/Stamp';

const ChallengeStamp = (props) => {
  const dispatch = useDispatch();

  const numberOfStamp = parseInt(props.content);
  const leftPad = (num) => {
    return num.toString().padStart(2, '0');
  };

  const [status, setStatus] = useState('unchecked');

  return (
    <Card>
      <StampTitle>✔️ 챌린지 진척도</StampTitle>
      <StampArea>
        {[...Array(numberOfStamp)].map((n, index) => {
          const day = [...Array(numberOfStamp)].map((v, i) =>
            i < 10 ? leftPad(i + 1) : i + 1,
          );
          return (
            <Stamp
              status={status}
              day={day[index]}
              key={index}
              onClick={() => dispatch(openModal(props.currentDay))}
            />
          );
        })}
      </StampArea>
    </Card>
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
