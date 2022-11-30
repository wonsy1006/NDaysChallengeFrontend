import React from 'react';
import styled from 'styled-components';

const Modal = () => {
  return (
    <ModalBackground>
      <ModalContainer></ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  max-width: 480px;
  height: 100vh;
  background: rgba(49, 49, 49, 0.49);
  z-index: 500;
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  height: 300px;

  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.bl50};
  z-index: 200;
`;
