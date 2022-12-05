import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUserDetails, logout } from '../app/module/userSlice';
import UserProfile from '../components/common/UserProfile';

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { userInfo } = useSelector((state) => state.user);

  return (
    <>
      <h2>내 정보</h2>
      <UserProfile
        margin="0 auto 3.2rem"
        nickname="nickname"
        profilePicNum={1}
      />
      <PagesContainer>
        <Link to="/challenge-list">
          <h3>완료된 챌린지 보기</h3>
        </Link>
        <Link to="/edit-profile">
          <h3>회원 정보 수정</h3>
        </Link>
        <Link to="/friends-list">
          <h3>친구 목록</h3>
        </Link>
        <Link to="/withdraw">
          <h3>계정 삭제</h3>
        </Link>
      </PagesContainer>
      <LogoutContainer>
        <StyledLink
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        >
          로그아웃
        </StyledLink>
      </LogoutContainer>
    </>
  );
};

export default MyPage;

const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 0 auto 1.5rem auto;

  & + & {
    margin: 1rem;
  }
`;

const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.bl500};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bl500};
`;
