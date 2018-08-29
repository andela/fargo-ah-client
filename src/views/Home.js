import React from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderCard from '../components/HeaderCard';
import { articles } from '../tests/__mocks__/mockData';
import MainCard from '../components/Card';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import '../styles/index.scss';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    <MainCard articles={articles.articles} size={3} />
    <MainCard classStyle="horizontal-plain" articles={articles.articles} size={3} />
    <MainCard classStyle="vertical-card" articles={articles.articles} size={1} />
    <Footer />
    <FooterSlim />
  </div>
);

export default Home;
