import React from 'react';
import { Grid } from 'semantic-ui-react';
import MainCard from '../components/Card';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import HeaderCard from '../components/HeaderCard';
import Avatar from '../components/Avatar';
import { articles, user } from '../tests/__mocks__/mockData';
import Button from '../components/Button';
import Header from '../components/Header/HeaderComponent';

const Home = () => (
  <div>
    <Header text="engage" />
    <Avatar user={user} />
    <Button text="Engage" to="/login" />
    <Grid id="header-card" stackable>
      {/* Replace the articles prop with the response from the get articles request call  */}
      <HeaderCard articles={articles.articles} />
    </Grid>
    <MainCard articles={articles.articles} size={3} />
    <MainCard classStyle="horizontal-plain" articles={articles.articles} size={3} />
    <MainCard classStyle="vertical-card" articles={articles.articles} size={1} />
    <Footer />
    <FooterSlim />
  </div>
);
export default Home;
