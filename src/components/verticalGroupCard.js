
import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import VerticalCard from './verticalCard';

const VerticalCardGroup = ({ articles }) => (
  <Card.Group id="vertical-card">
    {
      articles.map(article => (
        <VerticalCard key={article.slug} article={article} />
      ))
    }
  </Card.Group>
);
VerticalCardGroup.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default VerticalCardGroup;
