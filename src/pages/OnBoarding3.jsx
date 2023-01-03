import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import { default as Onboarding3 } from '../assets/images/onboarding1.svg';

const OnBoarding3 = () => {
  const setFirstAccess = () => {
    localStorage.setItem('firstAccess', 'true');
  };

  const directToMain = () => {
    window.location.href = '/';
  };

  return (
    <StyledSection>
      <ColumnWrapper width="90%" justifyContent="center" alignItems="center">
        <img src={Onboarding3} alt="Onboarding3" />
        <h2></h2>
        <StyledH3>오늘은 어떻게 하루를 보낼지 다짐을 적어봐요</StyledH3>
        <StyledP>
          Onboarding Investment App designed by salestinus sustyo h for
          Paperpillar. Connect with them on Dribbble; the global community for
          designers and creative professionals.
        </StyledP>
      </ColumnWrapper>
      <RowWrapper width="90%" justifyContent="center" alignItems="center">
        <EllipsisWrapper>
          <Ellipsis
            onclick={() => {
              window.location.href = '/onboarding1';
            }}
          />
          <Ellipsis
            onclick={() => {
              window.location.href = '/onboarding2';
            }}
          />
          <Ellipsis selected="selected" />
        </EllipsisWrapper>
        <Button
          primary
          onClick={() => {
            setFirstAccess();
            directToMain();
          }}
        >
          시작하기
        </Button>
      </RowWrapper>
    </StyledSection>
  );
};

export default OnBoarding3;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem;
  width: 100%;
  height: 100vh;
`;

const StyledH3 = styled.h3`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family.accent};
`;

const StyledP = styled.p`
  width: 100%;
  line-height: 1.6;
`;

const EllipsisWrapper = styled(RowWrapper)`
  gap: 0.5rem;
`;

const Ellipsis = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${(props) =>
    props.selected === 'selected'
      ? ({ theme }) => theme.colors.bl500
      : ({ theme }) => theme.colors.gr300};

  &:hover {
    cursor: pointer;
  }
`;
