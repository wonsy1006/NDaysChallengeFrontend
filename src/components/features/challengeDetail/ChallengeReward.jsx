import React from 'react';
import styled from 'styled-components';
import Card from '../../common/Card';

const ChallengeReward = () => {
  return (
    <Card>
      <RewardTitle>🎁 챌린지 보상</RewardTitle>
      <RewardContent>24시간 잠자기</RewardContent>
    </Card>
  );
};

export default ChallengeReward;

const RewardTitle = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.family.primary};
`;

const RewardContent = styled.p`
  padding: 1.6rem;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.bl500};
`;
