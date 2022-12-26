import React, { useEffect } from 'react';
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
import { getChallengeList } from '../app/module/challengeSlice';
import UserProfile from '../components/common/UserProfile';

const ChallengeDetail = () => {
  const { userInfo } = useSelector(state => state.user);
  const { isOpen } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChallengeList());
  }, [dispatch]);

  const { challenges } = useSelector(state => state.challenge);
  const params = useParams();

  const challenge = challenges.find(
    challenge => challenge.roomNumber === parseInt(params.roomNumber),
  );

  // 현재 일차 수 계산
  const today = new Date();
  const endDate = new Date(challenge.endDate);
  const currentDay = Math.ceil(
    (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  console.log(endDate);

  return (
    <>
      {isOpen && <ChallengeModal content={challenge} currentDay={currentDay} />}
      <UserProfile
        margin="2.4rem"
        flexDirection="row"
        profilePicNum={userInfo?.image}
        nickname={userInfo?.nickname}
      />
      <ChallengeTitle>{challenge.name}</ChallengeTitle>
      <RowWrapper justifyContent="center" margin="0 auto 2rem">
        <Tag routine>규칙적인 생활</Tag>
        <Tag individual>개인</Tag>
      </RowWrapper>
      <ChallengeDajim />
      {challenge.reward === '' ? null : (
        <ChallengeReward content={challenge.reward} />
      )}
      <ChallengeStamp content={challenge.totalDays} currentDay={currentDay} />
      <RowWrapper width="90%" margin="1rem auto" justifyContent="space-between">
        <PassWrapper>
          남은 패스 : <LeftPass>{challenge.passCount}</LeftPass> 회
        </PassWrapper>
        <CountWrapper>
          <Succeeded>{currentDay}</Succeeded> /{' '}
          <Entire>{challenge.totalDays}</Entire>
        </CountWrapper>
      </RowWrapper>
      <ColumnWrapper
        justifyContent="center"
        alignItems="center"
        margin="2rem auto"
      >
        <RemoveChallenge>챌린지 삭제하기</RemoveChallenge>
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
