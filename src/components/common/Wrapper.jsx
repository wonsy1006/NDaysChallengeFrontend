import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.width === undefined ? '100%' : props.width)};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width === undefined ? '100%' : props.width)};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
