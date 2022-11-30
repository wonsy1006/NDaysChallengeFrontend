import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../app/module/modalSlice';
import styled from 'styled-components';
import { RowWrapper } from '../../common/Wrapper';
import Button from '../../common/Button';
import { CloseIcon } from '../../common/Icon';

const ChallengeModal = () => {
  const { challenges, message, errorMessage } = useSelector(
    (state) => state.challenge,
  );
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>
          도전 <DayHighlight>12</DayHighlight>일차
        </ModalTitle>
        <ModalText>
          오늘의 도전,
          <br /> 성공하셨나요?
        </ModalText>
        <PassWrapper>
          남은 패스 : <LeftPass></LeftPass> 회
        </PassWrapper>
        <ButtonWrapper>
          <Button
            sub
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            패스 사용하기
          </Button>
          <Button
            primary
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            도전 성공
          </Button>
        </ButtonWrapper>
        <CloseWrapper
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <CloseIcon size={20} />
        </CloseWrapper>
      </Modal>
    </ModalContainer>
  );
};

export default ChallengeModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  margin: 0 auto;
  min-width: 360px;
  max-width: 480px;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: 1.6rem auto 1.6rem auto;
  padding: 2.4rem;
  height: auto;

  position: relative;

  background: ${({ theme }) => theme.colors.ye50};
  border-radius: 0.75rem;
  box-shadow: 0px 25px 10px rgba(0, 0, 0, 0.01),
    0px 14px 9px rgba(0, 0, 0, 0.04), 0px 6px 6px rgba(0, 0, 0, 0.08),
    0px 2px 3px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.09);
`;

const ModalTitle = styled.p`
  width: 95%;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: ${({ theme }) => theme.fonts.size.h4};
`;

const DayHighlight = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
`;

const ModalText = styled.p`
  padding: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: ${({ theme }) => theme.fonts.size.h3};
  line-height: 1.6;
`;

const PassWrapper = styled.div`
  font-size: 1.4rem;
  margin: 1.6rem auto;
`;

const LeftPass = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-left: 1rem;
`;

const ButtonWrapper = styled(RowWrapper)`
  justify-content: center;
  align-items: center;
`;

const CloseWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0.5rem;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
`;
