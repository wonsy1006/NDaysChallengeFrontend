import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../common/Card';
import Tag from '../../common/Tag';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';

const ChallengeListItem = ({ id, title, category, startDate }) => {
  return (
    <Card>
      <ColumnWrapper>
        <RowWrapper margin=".5rem">
          <Tag routine>{category}</Tag>
        </RowWrapper>
        <RowWrapper margin=".5rem">
          <ChallengeTitle>{title}</ChallengeTitle>
        </RowWrapper>
        <RowWrapper justifyContent="flex-end">
          <ChallengePeriod>
            <StartDate>{startDate}</StartDate>
            <span> - </span>
            <EndDate>2022.xx.xx</EndDate>
          </ChallengePeriod>
        </RowWrapper>
        <RowWrapper justifyContent="flex-end">
          <ChallengeDetailLink to="/challenge-detail">
            상세 보기
          </ChallengeDetailLink>
        </RowWrapper>
      </ColumnWrapper>
    </Card>
  );
};

export default ChallengeListItem;

export const ChallengeTitle = styled.p`
  margin: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const ChallengePeriod = styled.div`
  margin: 0.5rem;
`;

export const StartDate = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.small};
`;

export const EndDate = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.small};
`;

export const ChallengeDetailLink = styled(Link)`
  padding: 0.5rem;
  margin: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bl500};
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.bl500};
`;
