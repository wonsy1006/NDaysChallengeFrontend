import React from 'react';
import styled from 'styled-components';

export const Radio = () => {
  return <Radio />;
};

export const Label = () => {
  return <Label htmlFor={id}>label</Label>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 18rem;
  height: 4.8rem;
`;

const Label = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  font-weight: ${({ theme }) => theme.fonts.size.semiBold};
  color: ${({ theme }) => theme.colors.bl500};
`;

const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  border-radius: 1.6rem;
  ::after {
    content: '';
    display: block;
    border-radius: 1.6rem;
    width: 18rem;
    height: 4.8rem;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
  }

  :hover {
    cursor: pointer;
    ::after {
      background-color: ${({ theme }) => theme.colors.bl500};
      border: 0;
    }
  }

  &:hover + label {
    color: #fff;
    cursor: pointer;
  }

  :checked {
    ::after {
      background-color: ${({ theme }) => theme.colors.bl500};
      border: 0;
    }
    :hover {
      background-color: #fff;
      ::after {
        background-color: #2e73ac;
        border: 0;
      }
    }
  }

  &:checked + label {
    color: #fff;
    cursor: pointer;
  }
`;
