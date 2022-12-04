import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import UserProfile from '../components/common/UserProfile';
import NoChallenge from '../assets/images/noChallenge.svg';
import { ReactComponent as Pic1 } from '../assets/images/profile_pics/pic1.svg';
import ChallengeListItem from '../components/features/challengeList/ChallengeListItem';

const ChallengeList = () => {
  const { challenges, message, errorMessage } = useSelector(
    (state) => state.challenge,
  );

  const { userInfo } = useSelector((state) => state.user);

  const isIndividual = (element) => {
    if (element.type === 'individual') {
      return true;
    }
  };
  const individuals = challenges.filter(isIndividual);

  if (challenges.length === 0) {
    return (
      <div>
        <UserProfile
          profilePicNum={userInfo.image}
          nickname={userInfo.nickname}
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
      <UserContainer>
        <Pic1 />
        <NicknameContainer>
          <NicknameSpan>OOOOO</NicknameSpan>
          <span>님의 챌린지</span>
        </NicknameContainer>
      </UserContainer>
      <ListSection>
        <IndividualSection id="individualChallenge">
          <h3>개인 챌린지</h3>
          {challenges.map((challenge) => {
            return <ChallengeListItem key={challenge.number} {...challenge} />;
          })}
        </IndividualSection>
        <GroupSection id="groupChallenge">
          <h3>단체 챌린지</h3>
        </GroupSection>
      </ListSection>
    </>
  );
};

export default ChallengeList;

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
  align-items: center;
  margin-left: 0.5rem;
`;

const NicknameSpan = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-size: 1.7rem;
  font-weight: 700;
`;

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

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90%;
  margin: 0 auto 1rem auto;

  & + & {
    margin: 0.5rem;
  }
`;

const StyledSpan = styled.span`
  margin: 0 0.5rem 0 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bl500};
`;
