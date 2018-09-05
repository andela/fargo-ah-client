import React from 'react';
import { Card } from 'semantic-ui-react';
import Button from '../components/Button';
import HeaderCard from '../components/HeaderCard';
import { user, articles } from '../tests/__mocks__/mockData';
import Avatar from '../components/AvatarComponent';

const Home = () => (
  <div>
    <h1 className="test"> FARGO REACT APP - TEST HOME VIEW</h1>
    <Button text="Engage" />
    <Avatar user={user} />
    <Card.Group centered>
      {/* Replace the articles prop with the response from the get articles request call  */}
      <HeaderCard articles={articles} />
    </Card.Group>
  </div>
);
export default Home;
