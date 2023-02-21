import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { StyledInput } from '../components/common/Input';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import ProfilePic from '../components/common/ProfilePic';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  acceptFriendRequest,
  rejectFriendRequest,
  findFriends,
  sendRequestToFriend,
  getRequestList,
  getAcceptList,
} from '../app/module/friendsSlice';
import { SearchIcon } from '../components/common/Icon';

const FriendsList = () => {
  const dispatch = useDispatch();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getRequestList());
    dispatch(getAcceptList());
  }, []);

  // const { requestList } = useSelector((state) => state.friends);
  // const { acceptList } = useSelector((state) => state.friends);
  // console.log(requestList, acceptList);

  const [showNicknameForm, setShowNicknameForm] = useState(true);
  const [showIdForm, setShowIdForm] = useState(false);
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);

    dispatch(findFriends(data));
  };

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
        <StyledForm onSubmit={handleSubmit(submitForm)}>
          <RadioWrapper>
            <Radio
              {...register('field')}
              type="radio"
              value="nickname"
              id="nickname"
              defaultChecked
            />
            <RadioLabel htmlFor="nickname">닉네임으로 검색</RadioLabel>
            <Radio {...register('field')} type="radio" value="id" id="id" />
            <RadioLabel htmlFor="id">아이디로 검색</RadioLabel>
          </RadioWrapper>

          <RowWrapper width="90%" alignItems="center" margin="0 auto">
            <StyledInput {...register('nickname')} type="text" />
            {/* <StyledInput {...register('id')} type="text" /> */}
            <IconWrapper onClick={() => console.log('clicked')}>
              <SearchIcon size={28} />
            </IconWrapper>
          </RowWrapper>
        </StyledForm>
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

const RadioWrapper = styled(RowWrapper)`
  width: 95%;
  margin: 0 auto 2rem;
`;

const Radio = styled.input`
  appearance: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    background: ${({ theme }) => theme.colors.bl500};
    color: #fff;
  }
`;

const RadioLabel = styled.label`
  display: inline-block;
  padding: 0.8rem 2.8rem;
  border: 1px solid ${({ theme }) => theme.colors.bl500};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.bl500};

  &:hover {
    border: 1px solid #2e73ac;
    background: #2e73ac;
    color: #fff;
    cursor: pointer;
  }
`;

const IconWrapper = styled(RowWrapper)`
  width: 2rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UserName = styled.span`
  margin-right: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.bl500};
`;

const FriendsListContainer = styled.section`
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
