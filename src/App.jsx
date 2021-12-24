import './App.css';
import Profile from './components/Profile';
import user from './JSON/user.json';
import Statistics from './components/Statistics';
import data from './JSON/data.json';
import FriendList from './components/FriendList';
import friends from './JSON/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './JSON/transactions.json';

export default function App() {
  return (
    <div>
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
    </div>
  );
}
