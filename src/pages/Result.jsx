import React from 'react';
import styled from 'styled-components';
import { RowWrapper, ColumnWrapper } from '../components/common/Wrapper';

const Result = (challengeStatus) => {
  if (challengeStatus === 'success') {
    return <successWrapper></successWrapper>;
  } else {
    return <FailWrapper></FailWrapper>;
  }
};

export default Result;

const successWrapper = styled(ColumnWrapper)``;

const FailWrapper = styled(ColumnWrapper)``;
