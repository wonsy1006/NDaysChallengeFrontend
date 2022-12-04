import React from 'react';
import styled, { css } from 'styled-components';
import ProfilePic from './ProfilePic';
import { ColumnWrapper, RowWrapper } from './Wrapper';

const UserProfile = (props) => {
  const profilePicNum = props.profilePicNum;
  const nickname = props.nickname;

  return props.flexDirection === 'row' ? (
    <RowWrapper jusfityContent="center" alignItems="center">
      <ProfilePic picType={`pic${profilePicNum}`} />
      <NicknameWrapper row>{nickname}</NicknameWrapper>
    </RowWrapper>
  ) : (
    <ColumnWrapper jusfityContent="center" alignItems="center">
      <ProfilePic picType={`pic${profilePicNum}`} />
      <NicknameWrapper column>{nickname}</NicknameWrapper>
    </ColumnWrapper>
  );
};

export default UserProfile;

const NicknameWrapper = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  ${(props) =>
    props.row &&
    css`
      margin-left: 1rem;
    `}

  ${(props) =>
    props.column &&
    css`
      margin-top: 1rem;
    `}
`;
