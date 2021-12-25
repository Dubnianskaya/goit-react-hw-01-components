import PropTypes from 'prop-types';
import {
  Card,
  ProfileCard,
  UserPhoto,
  UserName,
  UserInformation,
  UserStatisticList,
  UserStatisticItem,
  UserStatisticType,
  UserStatistic,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <ProfileCard>
        <UserPhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInformation>@{tag}</UserInformation>
        <UserInformation>{location}</UserInformation>
      </ProfileCard>

      <UserStatisticList>
        <UserStatisticItem>
          <UserStatisticType>Followers</UserStatisticType>
          <UserStatistic>{stats.followers}</UserStatistic>
        </UserStatisticItem>
        <UserStatisticItem>
          <UserStatisticType>Views</UserStatisticType>
          <UserStatistic>{stats.views}</UserStatistic>
        </UserStatisticItem>
        <UserStatisticItem>
          <UserStatisticType>Likes</UserStatisticType>
          <UserStatistic>{stats.likes}</UserStatistic>
        </UserStatisticItem>
      </UserStatisticList>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
