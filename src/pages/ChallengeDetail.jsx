import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ChallengeDajim from '../components/features/challengeDetail/ChallengeDajim';
import ChallengeReward from '../components/features/challengeDetail/ChallengeReward';
import ChallengeStamp from '../components/features/challengeDetail/ChallengeStamp';
import ChallengeModal from '../components/features/challengeDetail/ChallengeModal';
import Invite from '../components/features/invite/Invite';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import { ReactComponent as Pic1 } from '../assets/images/profile_pics/pic1.svg';
import Tag from '../components/common/Tag';
import { useParams } from 'react-router-dom';

const ChallengeDetail = () => {
  const { id } = useParams();
  const { isOpen } = useSelector((store) => store.modal);
  const { challenges, message, errorMessage } = useSelector(
    (state) => state.challenge,
  );
  const dispatch = useDispatch();

  const removeChallenge = () => {};

  return (
    <>
      {isOpen && <ChallengeModal />}
      <UserContainer>
        <Pic1 />
        <NicknameContainer>
          <NicknameSpan>OOOOO</NicknameSpan>
          <span>님의 챌린지</span>
        </NicknameContainer>
      </UserContainer>
      <ChallengeTitle>{challenges[id].title}</ChallengeTitle>
      <RowWrapper justifyContent="center" margin="0 auto 2rem">
        <Tag routine>규칙적인 생활</Tag>
        <Tag individual>개인</Tag>
      </RowWrapper>
      <ChallengeDajim />
      <ChallengeReward />
      <ChallengeStamp />
      <RowWrapper width="90%" margin="1rem auto" justifyContent="space-between">
        <PassWrapper>
          남은 패스 : <LeftPass>3</LeftPass> 회
        </PassWrapper>
        <CountWrapper>
          <Succeeded>12</Succeeded> /<Entire>14</Entire>
        </CountWrapper>
      </RowWrapper>
      <ColumnWrapper
        justifyContent="center"
        alignItems="center"
        margin="2rem auto"
      >
        <RemoveChallenge onClick={removeChallenge()}>
          챌린지 삭제하기
        </RemoveChallenge>
      </ColumnWrapper>
      <Invite />
    </>
  );
};

export default ChallengeDetail;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 90%;
  margin: 0 auto 1.5rem auto;
`;

const NicknameContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-left: 0.5rem;
`;

const NicknameSpan = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-size: 1.5rem;
  font-weight: 700;
`;

const ChallengeTitle = styled.p`
  display: flex;
  justify-content: center;
  margin: 1rem auto 1rem auto;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const PassWrapper = styled.div`
  font-size: 1.2rem;
`;

const LeftPass = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-left: 1rem;
`;

const CountWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: ${({ theme }) => theme.fonts.size.h3};
`;

const Succeeded = styled.span`
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const Entire = styled.span`
  margin-left: 1rem;
`;

const RemoveChallenge = styled.a`
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.rd};
  color: ${({ theme }) => theme.colors.rd};
  cursor: pointer;
`;
