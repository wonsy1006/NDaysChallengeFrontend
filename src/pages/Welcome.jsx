import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RowWrapper } from '../components/common/Wrapper';
import Button from '../components/common/Button';

const Welcome = () => {
  const navigate = useNavigate();

  const directToMain = () => {
    window.localStorage.setItem('firstAccess', true);
    navigate('/');
  };

  const [engTitle, setEngTitle] = useState(true);
  const [korTitle, setKorTitle] = useState(false);

  const hideEngTitle = () => {
    setEngTitle(false);
    setKorTitle(true);
  };

  const showKorTitle = () => {
    setKorTitle(true);
    setEngTitle(false);
  };

  return (
    <>
      <TitleWrapper>
        {engTitle && (
          <WaveWrapper
            onAnimationEnd={() => {
              hideEngTitle();
            }}
          >
            <WaveSpan className="n" style={{ '--i': 1 }}>
              N
            </WaveSpan>
            <WaveSpan className="days" style={{ '--i': 2 }}>
              D
            </WaveSpan>
            <WaveSpan className="days" style={{ '--i': 3 }}>
              a
            </WaveSpan>
            <WaveSpan className="days" style={{ '--i': 4 }}>
              y
            </WaveSpan>
            <WaveSpan className="days" style={{ '--i': 5 }}>
              s
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 6 }}>
              C
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 7 }}>
              h
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 8 }}>
              a
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 9 }}>
              l
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 10 }}>
              l
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 11 }}>
              e
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 12 }}>
              n
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 13 }}>
              g
            </WaveSpan>
            <WaveSpan className="challenge" style={{ '--i': 14 }}>
              e
            </WaveSpan>
          </WaveWrapper>
        )}
        {korTitle && (
          <MainWrapper
            onAnimationEnd={() => {
              showKorTitle();
              navigate('/onboarding1');
            }}
          >
            <MainSpan className="n" style={{ '--i': 1 }}>
              엔
            </MainSpan>
            <MainSpan className="challenge" style={{ '--i': 2 }}>
              챌
            </MainSpan>
          </MainWrapper>
        )}
      </TitleWrapper>
      <Button primary onClick={directToMain}>
        시작하기
      </Button>
    </>
  );
};

export default Welcome;

const TitleWrapper = styled(RowWrapper)`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WaveWrapper = styled.div`
  position: absolute;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 3.2rem;
  animation: disappear 0.84s;
  animation-delay: 2s;

  @keyframes disappear {
    0%,
    100% {
      opacity: 0;
    }
  }
`;

const MainWrapper = styled.div`
  position: absolute;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 3.2rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  opacity: 0;
  animation: appear 4s;
  animation-delay: 0s;

  @keyframes appear {
    0%,
    100% {
      opacity: 100;
    }
  }
`;

const WaveSpan = styled.span`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  text-transform: uppercase;
  animation: wave 2s;
  animation-delay: calc(0.06s * var(--i));

  &.n {
    color: ${({ theme }) => theme.colors.bl500};
  }

  &.days {
    color: ${({ theme }) => theme.colors.ye500};
  }

  &.challenge {
    color: ${({ theme }) => theme.colors.bl500};
  }

  @keyframes wave {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-20px);
    }
  }
`;

const MainSpan = styled.span`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  text-transform: uppercase;
  animation: wave 2s;
  animation-delay: calc(0.1s * var(--i));

  &.n {
    color: ${({ theme }) => theme.colors.bl500};
  }

  &.challenge {
    color: ${({ theme }) => theme.colors.ye500};
  }

  @keyframes wave {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-20px);
    }
  }
`;
