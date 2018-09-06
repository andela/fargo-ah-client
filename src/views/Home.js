import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import MainCard from '../components/Card';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import HeaderCard from '../components/HeaderCard';
import Avatar from '../components/Avatar';
import { articles, user } from '../tests/__mocks__/mockData';
import LoginCard from '../components/LoginCard';
import '../styles/index.scss';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    <MainCard articles={articles.articles} size={3} />
    <MainCard classStyle="horizontal-plain" articles={articles.articles} size={3} />
    <MainCard classStyle="vertical-card" articles={articles.articles} size={1} />
    <Footer />
    <FooterSlim />
    <Button text="Engage" />
    <Avatar user={user} />
    <Grid id="header-card" stackable>
      {/* Replace the articles prop with the response from the get articles request call  */}
      <HeaderCard articles={articles.articles} />
    </Grid>
    <LoginCard />
  </div>
);
export default Home;
