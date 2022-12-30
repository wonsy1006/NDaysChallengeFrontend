import React from 'react';
import styled, { css } from 'styled-components';

const Tag = (props) => {
  const category = props.category;

  const getTagName = (category) => {
    let tagName;

    switch (category) {
      case 'routine':
        return (tagName = '일상생활');
      case 'exercise':
        return (tagName = '운동');
      case 'mindfulness':
        return (tagName = '멘탈케어');
      case 'etc':
        return (tagName = '기타');
    }
  };
  return <StyledTag {...props}>{getTagName(category)}</StyledTag>;
};

export default Tag;

const StyledTag = styled.span`
  padding: 0.6rem 1.6rem;
  border-radius: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: ${({ theme }) => theme.fonts.size.small};
  background: ${({ theme }) => theme.colors.gr400};
  color: #fff;
  margin-right: 0.8rem;

  ${(props) =>
    props.category === 'routine' &&
    css`
      background: #bf5c5c;
    `}

  ${(props) =>
    props.category === 'exercise' &&
    css`
      background: #a97140;
    `}

    ${(props) =>
    props.category === 'mindfulness' &&
    css`
      background: #318335;
    `}

    ${(props) =>
    props.category === 'etc' &&
    css`
      background: #553183;
    `}

    ${(props) =>
    props.individual &&
    css`
      background: ${({ theme }) => theme.colors.ye500};
    `}

    ${(props) =>
    props.group &&
    css`
      background: ${({ theme }) => theme.colors.bl500};
    `}
`;
