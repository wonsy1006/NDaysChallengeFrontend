import React from 'react';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../../common/Wrapper';
import {
  TwitterIcon,
  KakaotalkIcon,
  InstagramIcon,
  FacebookIcon,
} from '../../common/Icon';

const shareTwitter = () => {
  var sendText = '엔챌에서 나만의 챌린지를 만들어 보세요!'; // 전달할 텍스트
  var sendUrl = 'http://ndayschallenge.com'; // 전달할 URL
  window.open(
    'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl,
  );
};

const shareKakaotalk = () => {};

const shareInstagram = () => {};

const shareFacebook = () => {
  const sendUrl = 'http://ndayschallenge.com'; // 전달할 URL
  window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
};

const Invite = () => {
  return (
    <ColumnWrapper id="invite" margin="3.2rem 0">
      <h3>친구 초대하기</h3>
      <InviteIconsWrapper width="100%" margin="0 auto">
        <IconWrapper onClick={shareTwitter()}>
          <TwitterIcon size={48} />
        </IconWrapper>
        <IconWrapper onClick={shareKakaotalk()}>
          <KakaotalkIcon size={48} />
        </IconWrapper>
        <IconWrapper onClick={shareInstagram()}>
          <InstagramIcon size={48} />
        </IconWrapper>
        <IconWrapper onClick={shareFacebook()}>
          <FacebookIcon size={48} />
        </IconWrapper>
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

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
`;
