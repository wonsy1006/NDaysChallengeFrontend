import React, { useState } from 'react';
import styled from 'styled-components';
import EditProfileForm from '../components/features/editProfile/EditProfileForm';

const EditProfile = () => {
  return (
    <>
      <h2>회원 정보 수정</h2>
      <EditProfileForm />
    </>
  );
};

export default EditProfile;

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

const PicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem auto 0 auto;

  & > {
    cursor: pointer;
  }
`;
