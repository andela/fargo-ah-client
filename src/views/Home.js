import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import HeaderCard from '../components/HeaderCard';
import Avatar from '../components/Avatar';
import VerticalCardGroup from '../components/verticalGroupCard';
import { articles, user } from '../tests/__mocks__/mockData';
import '../styles/index.scss';

const Home = () => (
  <div>
    <Button text="Engage" />
    <Avatar user={user} />
    <Grid id="header-card" stackable>
      <HeaderCard articles={articles.articles} />
    </Grid>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    <Card.Group centered>
      {/* Replace the articles prop with the response from the get articles request call  */}
    </Card.Group>
    <VerticalCardGroup articles={articles.articles.splice(1, 2)} />
  </div>
);

export default Home;
