import React from 'react';
import {
  useNavigate,
  useParams,
  NavLink,
} from '../../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import { ListIcon } from './Icon';
import { AddIcon } from './Icon';
import { FeedIcon } from './Icon';
import { MyPageIcon } from './Icon';

// 네비게이션 페이지 활성화 시 아이콘/텍스트 메인컬러로 표시하기

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <StyledNavLink activeclassname="active" to="/">
          <ListIcon size={36} color={theme.colors.gr400} />
          <NavigationTitle>챌린지 목록</NavigationTitle>
        </StyledNavLink>
        <StyledNavLink activeclassname="active" to="/feed">
          <FeedIcon size={36} color={theme.colors.gr400} />
          <NavigationTitle>오늘의 다짐</NavigationTitle>
        </StyledNavLink>
        <StyledNavLink activeclassname="active" to="/create-challenge">
          <AddIcon size={36} color={theme.colors.gr400} />
          <NavigationTitle>챌린지 생성</NavigationTitle>
        </StyledNavLink>
        <StyledNavLink activeclassname="active" to="/mypage">
          <MyPageIcon size={36} color={theme.colors.gr400} />
          <NavigationTitle>내 정보</NavigationTitle>
        </StyledNavLink>
      </NavigationContainer>
      <Spacer />
    </>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;

  min-width: 360px;
  max-width: 480px;
  height: 9.6rem;
  padding: 20px 15px;
  gap: 49px;

  border-radius: 1.5rem 1.5rem 0 0;
  background: #fff4db;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const NavigationTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.nav};
  text-align: center;
  margin-top: 1rem;
`;

const Spacer = styled.div`
  height: 9.6rem;
`;
