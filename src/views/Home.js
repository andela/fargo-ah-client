import React from 'react';
import HorizontalCardGroup from '../components/HorizontalCard';
import { articles } from '../tests/__mocks__/mockData';

const Home = () => (
  <div>
    <HorizontalCardGroup articles={articles.articles} />
    <HorizontalCardGroup classStyle="horizontal-plain" articles={articles.articles} />
  </div>
);

export default Home;
