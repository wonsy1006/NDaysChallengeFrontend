import React from 'react';
import styled, { css } from 'styled-components';
import ProfilePic from './ProfilePic';
import { ColumnWrapper, RowWrapper } from './Wrapper';

const UserProfile = props => {
  const profilePicNum = props.profilePicNum;
  const nickname = props.nickname;
  const margin = props.margin;
  const justifyContent = props.justifyContent;

  return props.flexDirection === 'row' ? (
    <RowWrapper
      margin={margin}
      justifyContent={justifyContent}
      alignItems="center"
    >
      <ProfilePic picType={`pic${profilePicNum}`} />
      <NicknameWrapper row>{nickname}</NicknameWrapper>
    </RowWrapper>
  ) : (
    <ColumnWrapper
      margin={margin}
      justifyContent={justifyContent}
      alignItems="center"
    >
      <ProfilePic picType={`pic${profilePicNum}`} />
      <NicknameWrapper column>{nickname}</NicknameWrapper>
    </ColumnWrapper>
  );
};

export default UserProfile;

const NicknameWrapper = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  ${props =>
    props.row &&
    css`
      margin-left: 1rem;
    `}

  ${props =>
    props.column &&
    css`
      margin-top: 1rem;
    `}
`;
