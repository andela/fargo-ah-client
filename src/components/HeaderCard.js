import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../styles/headCard.scss';

const HeaderCard = ({ articles }) => {
  const latestArticles = articles.articles.slice(-3);
  return latestArticles.map(article => (
    <Card key={article.slug}>
      <Image src={article.imageUrl} />
      <Card.Content>
        <Card.Header>Tech</Card.Header>
        <Card.Description>
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/profiles/${article.author.username}`}>
          <Image src={article.author.image} />
          {article.author.username}
        </Link>
        <span className="ui right floated date">{moment(article.createdAt).fromNow()}</span>
      </Card.Content>
    </Card>
  ));
};
HeaderCard.propTypes = {
  articles: PropTypes.shape().isRequired,
};

export default HeaderCard;
