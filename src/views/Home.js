import React from 'react';
import { Grid } from 'semantic-ui-react';
import Avatar from '../components/Avatar';
import LoginCard from '../components/LoginCard';
import HeaderCard from '../components/HeaderCard';
import Button from '../components/Button';
import { articles, user } from '../tests/__mocks__/mockData';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    <Avatar user={user} />
    <HeaderCard />
    <LoginCard />
    <Button text="Engage" />

    {/* Replace the articles prop with the response from the get articles request call  */}
    <Grid id="header-card" stackable>
      <HeaderCard articles={articles.articles} />
    </Grid>
  </div>
);

export default Home;
