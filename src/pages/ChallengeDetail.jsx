import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ChallengeDajim from '../components/features/challengeDetail/ChallengeDajim';
import ChallengeReward from '../components/features/challengeDetail/ChallengeReward';
import ChallengeStamp from '../components/features/challengeDetail/ChallengeStamp';
import Invite from '../components/features/invite/Invite';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import Tag from '../components/common/Tag';
import { useParams } from 'react-router-dom';
import {
  getChallengeDetail,
  deleteChallenge,
} from '../app/module/challengeSlice';
import UserProfile from '../components/common/UserProfile';
import Loading from '../utils/Loading';

const ChallengeDetail = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.challenge);
  const dispatch = useDispatch();

  const params = useParams();
  const challengeId = parseInt(params.roomNumber);

  useEffect(() => {
    dispatch(getChallengeDetail(challengeId));
  }, [dispatch]);

  const challengeDetail = useSelector(
    (state) => state.challenge.challengeDetail,
  );

  const category = challengeDetail.category;
  // const type = challengeDetail.type;

  // 현재 일차 수 계산
  const today = new Date();
  const endDate = new Date(challengeDetail.endDate);
  const startDate = new Date(challengeDetail.startDate);
  const currentDay = Math.ceil(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const stamps = challengeDetail.stamp;
  const stampCounts = challengeDetail.day;
  const successCount = challengeDetail.successCount;
  const passCount = parseInt(challengeDetail.passCount);

  console.log(challengeDetail.day);

  // 챌린지 실패 조건 추가
  const judgeChallengeFailure = (
    currentDay,
    successCount,
    passCount,
    startDate,
    endDate,
  ) => {
    // 조건 1 currentDay > 챌린지 일수
    // 조건 2
  };

  return (
    <>
      {loading && <Loading />}
      <UserProfile
        margin="2.4rem"
        flexDirection="row"
        profilePicNum={userInfo?.image}
        nickname={userInfo?.nickname}
      />
      <ChallengeTitle>{challengeDetail.name}</ChallengeTitle>
      <RowWrapper justifyContent="center" margin="0 auto 2rem">
        <Tag category={category} />
        {/* <Tag category={type} /> */}
      </RowWrapper>
      <ChallengeDajim />
      {challengeDetail.reward === '' ? null : (
        <ChallengeReward content={challengeDetail.reward} />
      )}
      <ChallengeStamp content={challengeDetail} currentDay={currentDay} />
      <RowWrapper width="90%" margin="1rem auto" justifyContent="space-between">
        {passCount === 0 ? null : (
          <PassWrapper>
            남은 패스 : <LeftPass>{challengeDetail.passCount}</LeftPass> 회
          </PassWrapper>
        )}
        <CountWrapper>
          <Succeeded>{currentDay}</Succeeded> /{' '}
          <Entire>{challengeDetail.totalDays}</Entire>
        </CountWrapper>
      </RowWrapper>
      <ColumnWrapper
        justifyContent="center"
        alignItems="center"
        margin="2rem auto"
      >
        <RemoveChallenge
          onClick={() => {
            dispatch(deleteChallenge(challengeId));
            window.location.reload('/');
          }}
        >
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
