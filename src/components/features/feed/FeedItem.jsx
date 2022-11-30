import React from 'react';
import Card from '../../common/Card';
import styled from 'styled-components';
import { ReactComponent as Pic1 } from '../../../assets/images/profile_pics/pic1.svg';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import {
  Like,
  Cheer,
  Touched,
  Watch,
  Surprised,
  Interaction,
} from '../../common/Sticker';

const FeedItem = () => {
  return (
    <Card>
      <UserContainer>
        <Pic1 />
        <NicknameContainer>
          <NicknameSpan>OOOOO</NicknameSpan>
          <span>님이 다짐을 공유했습니다.</span>
        </NicknameContainer>
      </UserContainer>
      <DajimWrapper>열심히 코딩</DajimWrapper>
      <InteractionWrapper>
        <Like />
        <Cheer />
        <Touched />
        <Watch />
        <Surprised />
        {/* <Interaction type="like" /> */}
      </InteractionWrapper>
    </Card>
  );
};

export default FeedItem;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 95%;
  margin: 1rem auto;
`;

const NicknameContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.5rem;
`;

const NicknameSpan = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-size: 1.5rem;
  font-weight: 700;
`;

const DajimWrapper = styled.p`
  padding: 1rem 0 1rem 0;
  margin: 1rem auto 2.4rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const InteractionWrapper = styled(RowWrapper)`
  width: 95%;
  gap: 1rem;
  flex-grow: 1;
  flex-wrap: wrap;
`;
