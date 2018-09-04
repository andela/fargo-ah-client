import React from 'react';
import { Card } from 'semantic-ui-react';
import HeaderCard from '../components/HeaderCard';
import articles from '../tests/__mocks__/mockData';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>

    {/* Replace the articles prop with the response from the get articles request call  */}
    <Card.Group id="header-card" centered>
      <HeaderCard articles={articles} />
    </Card.Group>
  </div>
);

export default Home;
