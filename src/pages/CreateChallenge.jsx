import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { QuestionIcon } from '../components/common/Icon';
import { todayDate } from '../utils/Date';
import CreateChallengeForm from '../components/features/createChallenge/CreateChallengeForm';

const CreateChallenge = () => {
  return (
    <>
      <h2>챌린지 생성</h2>
      <CreateChallengeForm />
    </>
  );
};

export default CreateChallenge;
