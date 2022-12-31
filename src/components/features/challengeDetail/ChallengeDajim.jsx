import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ChallengeDajimForm from './ChallengeDajimForm';
import Card from '../../common/Card';
import { WriteIcon, ArrowUpIcon } from '../../common/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { getDajim } from '../../../app/module/dajimSlice';

const ChallengeDajim = ({ children }) => {
  // WriteIcon 클릭 시 다짐 입력 input 표시
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const getBackToEditMode = (value) => {
    setEditMode(value);
  };

  const params = useParams();
  const challengeId = parseInt(params.roomNumber);

  useEffect(() => {
    dispatch(getDajim(challengeId));
  }, [dispatch]);

  const { dajim } = useSelector((state) => state.dajim);

  return (
    <Card>
      <DajimTitle>✨ 오늘의 다짐</DajimTitle>
      <IconWrapper>
        {editMode ? (
          <Icon
            onClick={() => {
              setEditMode(false);
            }}
          >
            <ArrowUpIcon size={20} />
          </Icon>
        ) : (
          <Icon
            onClick={() => {
              setEditMode(true);
            }}
          >
            <WriteIcon size={20} />
          </Icon>
        )}
      </IconWrapper>
      {!editMode ? (
        <DajimContent>
          {dajim.content === '' ? '다짐을 입력해 보세요' : dajim.content}
        </DajimContent>
      ) : (
        <ChallengeDajimForm getBackToEditMode={getBackToEditMode} />
      )}
    </Card>
  );
};

export default ChallengeDajim;

const DajimTitle = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.family.primary};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.2rem;

  & > * {
    cursor: pointer;
  }
`;

const Icon = styled.div``;

const DajimContent = styled.p`
  padding: 1.6rem;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.bl500};
`;
