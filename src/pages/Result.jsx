import React from 'react';
import styled from 'styled-components';
import { RowWrapper, ColumnWrapper } from '../components/common/Wrapper';

const Result = (challengeStatus) => {
  if (challengeStatus === 'success') {
    return <successWrapper>성공</successWrapper>;
  } else if (challengeStatus === 'failure') {
    return <FailWrapper></FailWrapper>;
  }
};

export default Result;

const successWrapper = styled(ColumnWrapper)``;

const FailWrapper = styled(ColumnWrapper)``;
