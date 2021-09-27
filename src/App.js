import './App.css';

import Profile from './Components/Social-profile/Profile';
import user from './Components/Social-profile/user.json';

import StatisticsList from './Components/Statistics/StatisticsList';
import statisticalData from './Components/Statistics/statistical-data.json';

import FriendList from './Components/Friends/FriendList';
import amigos from './Components/Friends/friends.json';

import TransactionHistory from './Components/Transaction-history/TransactionHistory';
import transactionHistory from './Components/Transaction-history/transactions.json';

import Section from './Components/Section/Section';
import Container from './Components/Container/Container';

export default function App() {
  return (
    <div>
      <Container>
        <Section>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Section>
      </Container>

      <Container>
        <Section>
          <StatisticsList title="Upload stats" stats={statisticalData} />
        </Section>
      </Container>

      <Container>
        <Section>
          <FriendList items={amigos} />
        </Section>
      </Container>

      <Container>
        <Section>
          <TransactionHistory items={transactionHistory} />
        </Section>
      </Container>
    </div>
  );
}
