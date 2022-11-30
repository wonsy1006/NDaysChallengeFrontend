import React from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SearchInput } from '../components/common/Input';

import { ReactComponent as Pic1 } from '../assets/images/profile_pics/pic1.svg';

const FriendsList = () => {
  return (
    <>
      <h2>내 친구 목록</h2>
      <Card>
        <Pic1 />
        <p>OOOOO님이 친구 요청을 보냈습니다.</p>
        <ButtonContainer>
          <Button refuse>거절</Button>
          <Button accept>수락</Button>
        </ButtonContainer>
      </Card>
      <h3>친구 추가</h3>
      <RequestContainer>
        <SearchInput />
        <h4>검색 결과</h4>
        <ResultContainer>
          <ResultListContainer>
            <FriendContainer>
              <Pic1 style={{ marginRight: '1rem' }} />
              <span>OOOOO</span>
            </FriendContainer>
            <Button small>친구 추가</Button>
          </ResultListContainer>
          <ResultListContainer>
            <FriendContainer>
              <Pic1 style={{ marginRight: '1rem' }} />
              <span>OOOOO</span>
            </FriendContainer>
            <Button small>친구 추가</Button>
          </ResultListContainer>
        </ResultContainer>
      </RequestContainer>
      <h3>친구 목록</h3>
    </>
  );
};

export default FriendsList;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto 0;
`;

const ResultListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FriendContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
