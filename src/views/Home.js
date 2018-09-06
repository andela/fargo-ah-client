import React from 'react';
import Header from '../components/Header/HeaderComponent';
import { user } from '../tests/__mocks__/mockData';

const Home = () => (
  <div>
    <Header
      text="Engage"
      user={user}
    />
  </div>
);

export default Home;
