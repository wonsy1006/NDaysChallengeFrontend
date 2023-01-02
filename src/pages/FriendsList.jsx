import React from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SearchInput } from '../components/common/Input';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import ProfilePic from '../components/common/ProfilePic';
import { useDispatch, useSelector } from 'react-redux';

const FriendsList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>내 친구 목록</h2>
      <Card>
        <RowWrapper alignItems="center">
          <ColumnWrapper width="4rem" margin="1rem">
            <ProfilePic picType="pic3" />
          </ColumnWrapper>
          <p>
            <UserName>OOOOO</UserName>님이 친구 요청을 보냈습니다.
          </p>
        </RowWrapper>
        <RowWrapper justifyContent="center">
          <Button refuse>거절</Button>
          <Button accept>수락</Button>
        </RowWrapper>
      </Card>
      <h3>친구 추가</h3>
      <RequestContainer>
        <SearchInput
          onClick={() => {
            console.log('clicked');
          }}
        />
        <h4>검색 결과</h4>
        <ResultContainer>
          <ResultListContainer>
            <FriendContainer>
              <RowWrapper alignItems="center">
                <ColumnWrapper width="4rem" margin="1rem">
                  <ProfilePic picType="pic3" />
                </ColumnWrapper>
                <UserName>OOOOO</UserName>
              </RowWrapper>
            </FriendContainer>
            <Button small>친구 추가</Button>
          </ResultListContainer>
          <ResultListContainer>
            <FriendContainer>
              <RowWrapper alignItems="center">
                <ColumnWrapper width="4rem" margin="1rem">
                  <ProfilePic picType="pic3" />
                </ColumnWrapper>
                <UserName>OOOOO</UserName>
              </RowWrapper>
            </FriendContainer>
            <Button small>친구 추가</Button>
          </ResultListContainer>
        </ResultContainer>
      </RequestContainer>
      <h3>친구 목록</h3>
      <FriendsListContainer>
        <ColumnWrapper alignItems="center">
          <RowWrapper width="90%" alignItems="center">
            <ColumnWrapper width="4rem" margin="1rem">
              <ProfilePic picType="pic3" />
            </ColumnWrapper>
            <UserName>OOOOO</UserName>
          </RowWrapper>
          <RowWrapper width="90%" alignItems="center">
            <ColumnWrapper width="4rem" margin="1rem">
              <ProfilePic picType="pic3" />
            </ColumnWrapper>
            <UserName>OOOOO</UserName>
          </RowWrapper>
        </ColumnWrapper>
      </FriendsListContainer>
    </>
  );
};

export default FriendsList;

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

const UserName = styled.span`
  margin-right: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.bl500};
`;

const FriendsListContainer = styled.section`
  width: 100%;
`;
