import React from 'react';
import styled from 'styled-components';

export const Like = () => {
  return <InteractionP>👍 좋아요</InteractionP>;
};

export const Cheer = () => {
  return <InteractionP>💪 응원해요</InteractionP>;
};

export const Touched = () => {
  return <InteractionP>🥹 감동이에요</InteractionP>;
};

export const Watch = () => {
  return <InteractionP>👀 지켜볼게요</InteractionP>;
};

export const Surprised = () => {
  return <InteractionP>😳 놀랐어요</InteractionP>;
};

const interactionText = {
  like: '👍 좋아요',
  cheer: '💪 응원해요',
  touched: '🥹 감동이에요',
  watch: '👀 지켜볼게요',
  surprised: '😳 놀랐어요',
};

export const Interaction = () => {
  return <InteractionP></InteractionP>;
};

const InteractionP = styled.p`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr400};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.bl50};
  }
`;
