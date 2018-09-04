import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const headerCardFunction = (imageUrl, title, slug, username, authorImage, date) => (
  <Card>
    <Image src={imageUrl} />
    <Card.Content>
      <Card.Header>Tech</Card.Header>
      <Card.Description>
        <Link to={`/articles/${slug}`}>{title}</Link>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to={`/profiles/${username}`}>
        <Image src={authorImage} />
        {username}
      </Link>
      <span className="ui right floated date">{moment(date).fromNow()}</span>
    </Card.Content>
  </Card>
);
const HeaderCard = ({ articles }) => {
  const latestArticles = articles.slice(-3);
  return latestArticles.map((article, i) => {
    while (i !== 1) {
      return (
        <Grid.Column key={article.slug} width={4} only="computer tablet">
          {headerCardFunction(
            article.imageUrl,
            article.title,
            article.slug,
            article.author.username,
            article.author.image,
            article.createdAt,
          )}
        </Grid.Column>
      );
    }
    return (
      <Grid.Column key={article.slug} width={8}>
        {headerCardFunction(
          article.imageUrl,
          article.title,
          article.slug,
          article.author.username,
          article.author.image,
          article.createdAt,
        )}
      </Grid.Column>
    );
  });
};

export default HeaderCard;
