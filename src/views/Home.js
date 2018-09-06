import React from 'react';
import { Card } from 'semantic-ui-react';
import HeaderCard from '../components/HeaderCard';
import Menubar from '../components/Menubar';
import articles from '../tests/__mocks__/mockData';
import categoryData from '../tests/__mocks__/categoryData';

const Home = () => (
  <div>
    <h1>FARGO REACT APP - TEST HOME VIEW</h1>
    {/* {category data will be returned from API call to endpoint} */}
    <Menubar categorieslist={categoryData.categorieslist} />
    {/* Replace the articles prop with the response from the get articles request call  */}
    <Card.Group id="header-card" centered>
      <HeaderCard articles={articles} />
    </Card.Group>
  </div>
);
const Home = () => <div className="HomepageContainer">
<div className="header">header</div>
<div className="menubar">Category Menubar</div>
<div className="header-image-card">
  <div className="image-card-1">Image 1</div>
  <div className="image-card-2">Image 2</div>
  <div className="image-card-3">ImGE 3</div>
</div>
<div className="homepage-welcome">Author Haven Adverts</div>
<div className="featured-top-paid">
  <div className="featured">Feature</div>
  <div className="top-paid">Top-paid</div>
</div>
<div className="trending">
  <div>image 1</div>
  <div>image 2</div>
  <div>image 3</div>
  <div>image 4</div>
  <div>image 5</div>
  <div>image 6</div>
</div>
<div className="top-footer">Footer Top</div>
<div className="bottom-footer">Footer bottom</div>
                    </div>;

export default Home;
