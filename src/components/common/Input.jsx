import React from 'react';
import styled from 'styled-components';
import { SearchIcon, EnterIcon } from './Icon';
import { RowWrapper } from './Wrapper';

// 각 페이지 기존 Input 이 컴포넌트로 교체

export const InputLabel = (props) => {
  return <StyledLabel>{props.label}</StyledLabel>;
};

export const TextInput = (props) => {
  return <StyledInput type={props.type} {...props} />;
};

export const SearchInput = (props) => {
  return (
    <RowWrapper width="90%" margin="1rem auto 2.4rem" alignItems="center">
      <StyledInput />
      <IconWrapper>
        <SearchIcon size={28} onClick={props.onClick} />
      </IconWrapper>
    </RowWrapper>
  );
};

export const EnterInput = () => {
  return (
    <InputWrapper>
      <StyledInput />
      <IconWrapper>
        <EnterIcon size={28} />
      </IconWrapper>
    </InputWrapper>
  );
};

export const SelectionInput = () => {};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 2.4rem;
  position: relative;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  width: 90%;
  margin: 0 auto 1rem;
`;

export const StyledInput = styled.input`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 4.8rem;
  padding: 1.2rem 2rem;
  width: 90%;
  margin: 0 auto;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  &:hover {
    cursor: pointer;
  }
`;
