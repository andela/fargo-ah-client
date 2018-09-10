import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HorizontalCard = (classStyle, article) => (
  <Card className={`horizontal-card ${classStyle}`} key={article.slug}>
    <Image src={article.imageUrl} />
    <Card.Content>
      <Card.Meta>
        { article.category[0] }
        <p className="ui right floated">
          <Icon name="thumbs up" />
          { article.likes }
        </p>
      </Card.Meta>
      <Card.Header id="card-header">
        <Link to={`/articles/${article.slug}`}>
          {article.title}
        </Link>
      </Card.Header>
      <Card.Description>
        <Link to={`/profiles/${article.author.username}`}>
          <Image className="avatar" src={article.author.image} />
          { article.author.username}
        </Link>
        <span className="right floated">{moment(article.createdAt).fromNow()}</span>
      </Card.Description>
    </Card.Content>
  </Card>
);
const HorizontalCardGroup = ({ articles, size, classStyle }) => (
  <Card.Group id="horizontal-card" itemsPerRow={size}>
    {articles.map(article => HorizontalCard(classStyle, article))}
  </Card.Group>

);

HorizontalCardGroup.defaultProps = {
  classStyle: null,
  size: null,
};
HorizontalCardGroup.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.number,
  classStyle: PropTypes.string,
};

export default HorizontalCardGroup;
