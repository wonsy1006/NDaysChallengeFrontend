import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

const Report = () => {
  return (
    <>
      <PageTitle>신고하기</PageTitle>
      <StyledForm>
        <StyledDiv>
          <StyledLabel>신고할 피드</StyledLabel>
          <StyledInput disabled placeholder="{feednumber}" />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>신고할 내용</StyledLabel>
          <StyledTextarea rows="10"></StyledTextarea>
        </StyledDiv>
        <ButtonContainer>
          <Button sub>취소하기</Button>
          <Button primary>신고하기</Button>
        </ButtonContainer>
      </StyledForm>
    </>
  );
};

export default Report;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 1.5rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 3rem;
  padding: 0.75rem 1.25rem;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  text-align-last: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto 2rem auto;
`;

const StyledTextarea = styled.textarea`
  padding: 1rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 1rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
  }
`;
