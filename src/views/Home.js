import React from 'react';
import { user } from '../tests/__mocks__/mockData';
import Header from '../components/Header/HeaderComponent';

const Home = () => (
  <div>
    {/* Replace the text and user prop with the response from the api call  */}
    <Header
      text="Engage"
      user={user}
    />
  </div>
);
export default Home;
