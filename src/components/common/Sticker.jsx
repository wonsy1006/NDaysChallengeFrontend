import React from 'react';
import styled from 'styled-components';

const Sticker = (props) => {
  const count = parseInt(props.count);
  const type = props.type;
  const status = props.status;

  const getStickerText = (type) => {
    let text;

    switch (type) {
      case 'like':
        return (text = '👍 좋아요');
      case 'cheer':
        return (text = '💪 응원해요');
      case 'touched':
        return (text = '🥹 감동이에요');
      case 'watch':
        return (text = '👀 지켜볼게요');
      case 'surprised':
        return (text = '😳 놀랐어요');
    }
  };

  return (
    <StickerContainer status={status}>
      {getStickerText(type)}
      {count > 0 ? <CountSpan>{count}</CountSpan> : <ZeroSpan>0</ZeroSpan>}
    </StickerContainer>
  );
};

export default Sticker;

const StickerContainer = styled.p`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr400};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.bl50};
  }

  ${(props) =>
    props.selected &&
    css`
      background: ${({ theme }) => theme.colors.bl50};
    `}
`;

const CountSpan = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.gr500};
  margin: 0 0 0 1rem;
`;

const ZeroSpan = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  color: ${({ theme }) => theme.colors.gr500};
  margin: 0 0 0 1rem;
`;
