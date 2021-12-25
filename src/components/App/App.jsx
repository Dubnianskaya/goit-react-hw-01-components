import Profile from '../Profile/Profile';
import user from '../../JSON/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../../JSON/data.json';
import FriendList from '../FriendsList/FriendList';
import friends from '../../JSON/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../JSON/transactions.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}
