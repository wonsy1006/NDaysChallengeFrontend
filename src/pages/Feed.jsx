import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import { ReactComponent as Pic1 } from '../assets/images/profile_pics/pic1.svg';
import FeedItem from '../components/features/feed/FeedItem';

const Feed = () => {
  return (
    <>
      <h2>오늘의 다짐</h2>
      <FeedItem user="user1" dajimContent="깃허브 커밋하기" />
      <FeedItem user="user2" dajimContent="퇴근하면 바로 운동 가기" />
      <FeedItem user="user3" dajimContent="요미 산책시키기" />
    </>
  );
};

export default Feed;

const DajimContainer = styled.p`
  padding: 0 0 0.5rem 0;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 95%;
`;

const HeartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`;

const HeartCount = styled.p`
  margin-left: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.gr500};
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`;

const CommentCount = styled.p`
  margin-left: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.gr500};
`;

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentList = styled.div``;

const InputContainer = styled.div`
  position: relative;
`;

const CommentInput = styled.input`
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 3rem;
  padding: 0.75rem 1.25rem;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;
