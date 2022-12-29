import React from 'react';
import styled, { css } from 'styled-components';

const Stamp = (props) => {
  return (
    <Circle status={props.status}>
      <Day {...props}>{props.status === 'pass' ? 'pass' : props.day}</Day>
    </Circle>
  );
};

export default Stamp;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  border-radius: 50%;

  ${(props) =>
    props.status === 'unchecked' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.gr400};
      cursor: pointer;

      &:hover {
        background: rgba(138, 138, 138, 0.23);
      }
    `}

  ${(props) =>
    props.status === 'success' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.bl500};
      background: ${({ theme }) => theme.colors.bl500};
    `}

  ${(props) =>
    props.status === 'pass' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.ye500};
      background: ${({ theme }) => theme.colors.ye500};
    `}

  ${(props) =>
    props.status === 'fail' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.rd};
      background: ${({ theme }) => theme.colors.rd};
    `}
`;

const Day = styled.span`
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  ${(props) =>
    props.status === 'unchecked' &&
    css`
      color: ${({ theme }) => theme.colors.gr400};
    `}

  ${(props) =>
    props.status === 'success' &&
    css`
      color: #fff;
    `}

  ${(props) =>
    props.status === 'pass' &&
    css`
      color: #fff;
      font-size: ${({ theme }) => theme.fonts.size.small};
    `}

  ${(props) =>
    props.status === 'fail' &&
    css`
      color: #fff;
    `}
`;
