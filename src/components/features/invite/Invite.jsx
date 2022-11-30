import React from 'react';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import {
  TwitterIcon,
  KakaotalkIcon,
  InstagramIcon,
  FacebookIcon,
} from '../../common/Icon';

const Invite = () => {
  return (
    <ColumnWrapper id="invite" margin="3.2rem 0">
      <h3>친구 초대하기</h3>
      <InviteIconsWrapper width="100%" margin="0 auto">
        <TwitterIcon size={48} />
        <KakaotalkIcon size={48} />
        <InstagramIcon size={48} />
        <FacebookIcon size={48} />
      </InviteIconsWrapper>
    </ColumnWrapper>
  );
};

export default Invite;

const InviteIconsWrapper = styled(RowWrapper)`
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: nowrap;
  margin: 1rem auto;

  & > * {
    cursor: pointer;
  }
`;
