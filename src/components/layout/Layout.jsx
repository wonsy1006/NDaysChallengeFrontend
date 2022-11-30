import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;

const LayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.ye50};
  display: flex;
  flex-direction: column;
  position: relative;

  min-width: 360px;
  max-width: 480px;
  min-height: 100vh;
  margin: auto;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
