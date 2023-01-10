import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import styled from 'styled-components';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';

function Loading() {
  return (
    <LoaderWrapper>
      <SyncLoader color="#0B62AA" height={15} width={5} />
    </LoaderWrapper>
  );
}

export default Loading;

const LoaderWrapper = styled(RowWrapper)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
