import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import UserProfile from '../components/common/UserProfile';
import { ReactComponent as NoChallenge } from '../assets/images/nochallenge.svg';
import ChallengeListItem from '../components/features/challengeList/ChallengeListItem';
import { getChallengeList } from '../app/module/challengeSlice';
import { persistor } from '../app/store.js';

const ChallengeList = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(state => state.user);

  const { userInfo } = useSelector(state => state.user);

  const purge = async () => {
    await persistor.purge();
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(getChallengeList());
    } else {
      purge();
    }
  }, [dispatch]);

  const { challenges } = useSelector(state => state.challenge);

  // const isIndividual = (element) => {
  //   if (element.type === 'individual') {
  //     return true;
  //   }
  // };
  // const individuals = challenges.filter(isIndividual);

  if (challenges.length === 0) {
    return (
      <div>
        <UserProfile
          margin="2.4rem"
          flexDirection="row"
          profilePicNum={userInfo?.image}
          nickname={userInfo?.nickname}
        />
        <Card>
          <NoChallenge></NoChallenge>
          <StyledText>
            아직 챌린지를 만들지 않으셨군요? <br />
            새로운 챌린지를 만들어 보세요!
          </StyledText>
          <ButtonContainer>
            <Link to="/create-challenge">
              <Button primary>챌린지 만들기</Button>
            </Link>
          </ButtonContainer>
        </Card>
      </div>
    );
  }

  return (
    <>
      <UserProfile
        margin="2.4rem"
        flexDirection="row"
        profilePicNum={userInfo?.image}
        nickname={userInfo?.nickname}
      />
      <ListSection>
        <IndividualSection id="individualChallenge">
          {/* <h3>개인 챌린지</h3> */}
          {challenges.map(challenge => {
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
};

export default ChallengeList;

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IndividualSection = styled.section``;

const GroupSection = styled.section``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  margin: 1rem auto 0.5rem auto;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;
