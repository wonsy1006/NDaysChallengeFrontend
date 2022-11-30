import React from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => <StyledButton type="submit" {...props} />;

export default Button;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 1.6rem;
  gap: 1.6rem;
  border: 0;
  cursor: pointer;

  font-weight: 500;
  letter-spacing: 0.05rem;
  color: #fff;

  width: 19.2rem;
  height: 4.8rem;

  /* background: ${({ theme }) => theme.colors.bl500};
  &:hover {
    background: #2e73ac;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  } */

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.bl500};
      padding: 1.4rem 1.6rem;
      border-radius: 3rem;
      font-size: ${({ theme }) => theme.fonts.size.normal};
      &:hover {
        background: #2e73ac;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}

  ${(props) =>
    props.small &&
    css`
      background: ${({ theme }) => theme.colors.bl500};
      padding: 1.6rem 1.92rem;
      border-radius: 4.8rem;
      font-size: ${({ theme }) => theme.fonts.size.small};
      width: 9.6rem;
      height: 2.4rem;
      &:hover {
        background: #2e73ac;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}

  ${(props) =>
    props.sub &&
    css`
      background: ${({ theme }) => theme.colors.ye500};
      padding: 1.4rem 1.6rem;
      border-radius: 3rem;
      font-size: ${({ theme }) => theme.fonts.size.normal};
      &:hover {
        background: #eab12c;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}

  ${(props) =>
    props.accept &&
    css`
      padding: 0.8rem 1.6rem;
      width: 16rem;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.colors.gr};
      border-radius: 0.8rem;
      background: transparent;
      color: ${({ theme }) => theme.colors.gr};
      font-size: ${({ theme }) => theme.fonts.size.small};
      &:hover {
        background: ${({ theme }) => theme.colors.gr};
        color: ${({ theme }) => theme.colors.gr000};
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}
  
    ${(props) =>
    props.refuse &&
    css`
      padding: 0.8rem 1.6rem;
      width: 16rem;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.colors.rd};
      border-radius: 0.8rem;
      background: transparent;
      color: ${({ theme }) => theme.colors.rd};
      font-size: ${({ theme }) => theme.fonts.size.small};
      &:hover {
        background: ${({ theme }) => theme.colors.rd};
        color: ${({ theme }) => theme.colors.gr000};
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}
`;
