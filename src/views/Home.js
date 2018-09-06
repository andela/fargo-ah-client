import React from 'react';
import Button from '../components/button';
import VerticalCard from '../components/HorinzontalCard';
import { articles } from '../tests/__mocks__/mockData';

const Home = () => (
  <div>
    <h1> FARGO REACT APP - TEST HOME VIEW</h1>
    <VerticalCard styleClass="horinzontal-plain" articles={articles.articles} />
    <Button text="Engage" />
  </div>
);

export default Home;
