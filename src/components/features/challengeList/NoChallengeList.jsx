import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ProfilePic from '../../common/ProfilePic';
import { ReactComponent as NoChallenge } from '../assets/images/nochallenge.svg';

const NoChallengeList = () => {
  return (
    <div>
      <UserNameContainer>
        <ProfilePic picType="pic1" />
        <StyledSpan>OOOOO 님</StyledSpan>
        <span>의 챌린지</span>
      </UserNameContainer>
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
};

export default NoChallengeList;

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
