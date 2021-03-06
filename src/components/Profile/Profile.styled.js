import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 8px;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.white};
  margin-top: 50px;
`;

export const UserName = styled.p`
  margin: 15px 0;
  font-size: 44px;
  font-weight: 900;
  color: ${props => props.theme.colors.white};
`;

export const UserInformation = styled.p`
  margin: 15px 0;
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;

export const UserStatisticList = styled.ul`
  display: flex;
  width: 600px;
  margin-bottom: 15px;
`;

export const UserStatisticItem = styled.li`
  flex-basis: calc(100% / 3);
  text-align: center;
`;

export const UserStatisticType = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.blue};
`;

export const UserStatistic = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 700;
  background-color: ${props => props.theme.colors.white};
`;
