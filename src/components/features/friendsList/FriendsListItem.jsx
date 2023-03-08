import React from 'react';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import ProfilePic from '../../common/ProfilePic';
import { useSelector } from 'react-redux';

const FriendsListItem = () => {
  const { acceptList } = useSelector((state) => state.friends);

  return (
    <FriendsListContainer>
      <ColumnWrapper alignItems="center">
        {acceptList.map((accept) => {
          return (
            <RowWrapper width="90%" alignItems="center">
              <ColumnWrapper width="4rem" margin="1rem">
                <ProfilePic picType="pic3" />
              </ColumnWrapper>
              <UserName>OOOOO</UserName>
            </RowWrapper>
          );
        })}
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
  );
};

export default FriendsListItem;

const FriendsListContainer = styled.section`
  width: 100%;
`;

const UserName = styled.span`
  margin-right: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.bl500};
`;
