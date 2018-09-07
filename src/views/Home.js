import React from 'react';
import { Grid } from 'semantic-ui-react';
// import Avatar from '../components/Avatar';
// import LoginCard from '../components/LoginCard';
import HeaderCard from '../components/HeaderCard';
// import Button from '../components/Button';
import Header from '../components/Header/HeaderComponent';
import { articles, user } from '../tests/__mocks__/mockData';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';

const Home = () => (
  <div>
    {/* Replace the text and user prop with the response from the api call  */}
    <Header text="Engage" user={user} />
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    {/* <Button text="Engage" /> */}

    {/* Replace the articles prop with the response from the get articles request call  */}
    <Grid id="header-card" stackable>
      <HeaderCard articles={articles.articles} />
    </Grid>
    <Footer />
    <FooterSlim />
  </div>
);

export default Home;
