import React from 'react';
import { articles } from '../tests/__mocks__/mockData';
import MainCard from '../components/Card';
import '../styles/index.scss';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    <MainCard articles={articles.articles} size={3} />
    <MainCard classStyle="horizontal-plain" articles={articles.articles} size={3} />
    <MainCard classStyle="vertical-card" articles={articles.articles} size={1} />
  </div>
);

export default Home;
