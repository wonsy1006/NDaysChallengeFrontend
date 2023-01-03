import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRightIcon } from '../components/common/Icon';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import { default as Onboarding2 } from '../assets/images/onboarding2.svg';

const OnBoarding2 = () => {
  return (
    <StyledSection>
      <ColumnWrapper width="90%" justifyContent="center" alignItems="center">
        <img src={Onboarding2} alt="" />
        <h2></h2>
        <StyledH3>오늘은 성공하지 못할 것 같다면 패스를 사용해봐요</StyledH3>
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
          <Ellipsis selected="selected" />
          <Ellipsis
            onclick={() => {
              window.location.href = '/onboarding3';
            }}
          />
        </EllipsisWrapper>
        <StyledLink to="/onboarding3">
          <span>다음</span>
          <ArrowRightIcon size="16" color="#313131" />
        </StyledLink>
      </RowWrapper>
    </StyledSection>
  );
};

export default OnBoarding2;

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

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 6rem;

  & > span {
    font-family: ${({ theme }) => theme.fonts.family.accent};
  }
`;
