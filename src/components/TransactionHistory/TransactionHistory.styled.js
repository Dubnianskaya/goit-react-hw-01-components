import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  text-align: center;
  margin-bottom: 30px;
`;

export const TableHead = styled.th`
  font-size: 36px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.blue};
`;

export const TableBody = styled.td`
  font-size: 24px;
  background-color: ${props => props.theme.colors.white};
`;
