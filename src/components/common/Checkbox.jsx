import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      <CheckboxWrapper>
        <label>
          <HiddenCheckbox
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
          />
          <StyledCheckbox />
          <span>{label}</span>
        </label>
      </CheckboxWrapper>
    </>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const HiddenCheckbox = styled.input`
  appearance: none;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.gr500};
  border-radius: 0.25rem;
`;
