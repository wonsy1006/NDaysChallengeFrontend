import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import ProfilePic from '../../common/ProfilePic';
import { useDispatch, useSelector } from 'react-redux';
import { getAcceptList } from '../../../app/module/friendsSlice';

const FriendsListItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAcceptList);
  }, []);

  const { acceptList } = useSelector((state) => state.friends);

  return (
    <FriendsListContainer>
      <ColumnWrapper alignItems="center">
        {acceptList.length === 0 ? (
          <p>표시할 친구가 없습니다.</p>
        ) : (
          acceptList.map((accept) => {
            return (
              <RowWrapper width="90%" alignItems="center">
                <ColumnWrapper width="4rem" margin="1rem">
                  <ProfilePic picType={`pic${accept.image}`} />
                </ColumnWrapper>
                <UserName>{accept.nickname}</UserName>
              </RowWrapper>
            );
          })
        )}
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
