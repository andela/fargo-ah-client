import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import HeaderCard from '../components/HeaderCard';
import { articles } from '../tests/__mocks__/mockData';

const Home = () => (
  <div>
    <Button text="Engage" />
    <Grid id="header-card" stackable>
      <HeaderCard articles={articles.articles} />
    </Grid>
    <Card.Group centered>
      {/* Replace the articles prop with the response from the get articles request call  */}
      <HeaderCard articles={articles} />
    </Card.Group>
  </div>
);

export default Home;
