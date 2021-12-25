import PropTypes from 'prop-types';
import {
  FriendsItem,
  Status,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}>&bull;</Status>
      <Avatar src={avatar} alt={name} width="68" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
