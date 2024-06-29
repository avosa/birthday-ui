import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from './apolloClient';
import { GET_BIRTHDAY_MESSAGE } from './queries';
import './App.css';

const BirthdayMessage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BIRTHDAY_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div className="message-container">{data.birthday.message}</div>;
};

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <h1>Birthday Message</h1>
      <BirthdayMessage />
    </div>
  </ApolloProvider>
);

export default App;