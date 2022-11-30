import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: 0 auto 1.5rem auto;
  padding: 1rem;
  height: auto;

  position: relative;

  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0px 25px 10px rgba(0, 0, 0, 0.01),
    0px 14px 9px rgba(0, 0, 0, 0.04), 0px 6px 6px rgba(0, 0, 0, 0.08),
    0px 2px 3px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.09);
`;

export default Card;
