import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import ProfilePic from './ProfilePic';
import { ColumnWrapper, RowWrapper } from './Wrapper';

const UserProfile = (props) => {
  const { userInfo } = useSelector((state) => state.user);

  return props.flexDirection === 'row' ? (
    <RowWrapper jusfityContent="center" alignItems="center">
      <ProfilePic picType="pic3" />
      <NicknameWrapper row>nickname</NicknameWrapper>
    </RowWrapper>
  ) : (
    <ColumnWrapper jusfityContent="center" alignItems="center">
      <ProfilePic picType="pic4" />
      <NicknameWrapper column>nickname</NicknameWrapper>
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
