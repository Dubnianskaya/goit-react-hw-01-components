import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 8px;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  margin: 15px 0;
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;

export const StatisticList = styled.ul`
  display: flex;
  width: 600px;
  margin-bottom: 15px;
`;

export const StatisticItem = styled.li`
  flex-basis: calc(100% / 4);
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.blue};
`;

export const Percentage = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 700;
  background-color: ${props => props.theme.colors.white};
`;
