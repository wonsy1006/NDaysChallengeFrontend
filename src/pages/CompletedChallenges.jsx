import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import Loading from '../utils/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getCompletedChallengeList } from '../app/module/challengeSlice';

const CompletedChallenges = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompletedChallengeList());
  }, [dispatch]);

  const { loading, completedChallenges } = useSelector(
    (state) => state.challenge,
  );

  if (completedChallenges.length === 0) {
    return <ColumnWrapper>아직 완료한 챌린지가 없습니다.</ColumnWrapper>;
  } else {
    return (
      <>
        {loading && <Loading />}
        <UserProfile
          margin="2.4rem"
          flexDirection="row"
          profilePicNum={userInfo?.image}
          nickname={userInfo?.nickname}
        />
        <ListSection>
          <IndividualSection id="individualChallenge">
            {/* <h3>개인 챌린지</h3> */}
            {challenges.map((challenge) => {
              return (
                <ChallengeListItem key={challenge.roomNumber} {...challenge} />
              );
            })}
          </IndividualSection>
          {/* <GroupSection id="groupChallenge">
            <h3>단체 챌린지</h3>
          </GroupSection> */}
        </ListSection>
      </>
    );
  }
};

export default CompletedChallenges;
