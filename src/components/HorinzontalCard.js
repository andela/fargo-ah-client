import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HorinzontalCard = ({ articles, styleClass }) => (
  <Card.Group id="horinzontal-card" styleClass={styleClass}>
    { articles.map(article => (
      <Card className={`horinzontal-card ${styleClass}`} key={article.slug}>
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
              { article.author.firstname}
            </Link>
            <span className="right floated">{moment(article.createdAt).fromNow()}</span>
          </Card.Description>
        </Card.Content>
      </Card>
    )) }
  </Card.Group>
);
HorinzontalCard.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  styleClass: PropTypes.string.isRequired,
};
export default HorinzontalCard;
