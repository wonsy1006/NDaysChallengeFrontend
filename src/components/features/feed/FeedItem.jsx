import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../common/Card';
import styled from 'styled-components';
import ProfilePic from '../../common/ProfilePic';
import { RowWrapper } from '../../common/Wrapper';
import Sticker from '../../common/Sticker';
import { selectEmotion } from '../../../app/module/dajimSlice';

const FeedItem = (props) => {
  const dispatch = useDispatch();
  const dajimNumber = props.dajimNumber;

  return (
    <Card>
      <UserContainer>
        <ProfilePic picType={`pic${props.pic}`} />
        <NicknameContainer>
          <NicknameSpan>{props.user}</NicknameSpan>
          <span>님이 다짐을 공유했습니다.</span>
        </NicknameContainer>
      </UserContainer>
      <DajimWrapper>{props.dajimContent}</DajimWrapper>
      <InteractionWrapper>
        <Sticker
          type="like"
          dajimNumber={dajimNumber}
          count={props.allStickers.LIKE}
          status="unselected"
        />
        <Sticker
          type="cheer"
          dajimNumber={dajimNumber}
          count={props.allStickers.CHEER}
          status="unselected"
        />
        <Sticker
          type="touched"
          dajimNumber={dajimNumber}
          count={props.allStickers.TOUCHED}
          status="unselected"
        />
        <Sticker
          type="watch"
          dajimNumber={dajimNumber}
          count={props.allStickers.WATCH}
          status="unselected"
        />
        <Sticker
          type="surprised"
          dajimNumber={dajimNumber}
          count={props.allStickers.SURPRISED}
          status="unselected"
        />
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
  margin-left: 1.2rem;
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
