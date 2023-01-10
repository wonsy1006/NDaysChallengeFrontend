import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ChallengeResult = () => {
  const status = useSelector((state) => state.challenge.status);
  if (status === 'success') {
    return <div>success</div>;
  } else {
    return <div>fail</div>;
  }
};

export default ChallengeResult;
