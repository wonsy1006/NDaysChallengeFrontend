import React from 'react';
import styled, { css } from 'styled-components';

const Tag = (props) => {
  const category = props.category;

  const getTagName = (category) => {
    let tagName;

    switch (category) {
      case 'ROUTINE':
        return (tagName = '일상생활');
      case 'EXERCISE':
        return (tagName = '운동');
      case 'MINDFULNESS':
        return (tagName = '멘탈케어');
      case 'ETC':
        return (tagName = '기타');
      case 'INDIVIDUAL':
        return (tagName = '개인');
      case 'GROUP':
        return (tagName = '단체');
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
    props.category === 'ROUTINE' &&
    css`
      background: #bf5c5c;
    `}

  ${(props) =>
    props.category === 'EXERCISE' &&
    css`
      background: #a97140;
    `}

    ${(props) =>
    props.category === 'MINDFULNESS' &&
    css`
      background: #318335;
    `}

    ${(props) =>
    props.category === 'ETC' &&
    css`
      background: #553183;
    `}

    ${(props) =>
    props.category === 'INDIVIDUAL' &&
    css`
      background: ${({ theme }) => theme.colors.ye500};
    `}

    ${(props) =>
    props.category === 'GROUP' &&
    css`
      background: ${({ theme }) => theme.colors.bl500};
    `}
`;
