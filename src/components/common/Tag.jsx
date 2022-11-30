import React from 'react';
import styled, { css } from 'styled-components';

const Tag = (props) => <StyledTag {...props} />;

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
    props.routine &&
    css`
      background: #bf5c5c;
    `}

  ${(props) =>
    props.workout &&
    css`
      background: #a97140;
    `}

    ${(props) =>
    props.diet &&
    css`
      background: #318335;
    `}

    ${(props) =>
    props.mental &&
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
