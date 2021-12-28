import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  flex-basis: calc(100% / 5);
  margin-left: 30px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const setOnlineColor = ({ isOnline, theme }) => {
  return isOnline ? theme.colors.green : theme.colors.red;
};

export const Status = styled.span`
  font-size: 36px;
  margin-right: 5px;
  color: ${setOnlineColor};
`;

export const Avatar = styled.img`
  border-radius: 25%;
  background-color: ${props => props.theme.colors.white};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;
