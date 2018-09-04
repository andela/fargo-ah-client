import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const headerCard = data => (
  <Card>
    <Image src={data.imageUrl} />
    <Card.Content>
      <Card.Header>Tech</Card.Header>
      <Card.Description>
        <Link to={`/articles/${data.slug}`}>{data.title}</Link>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to={`/profiles/${data.author.username}`}>
        <Image src={data.author.image} />
        {data.author.username}
      </Link>
      <span className="ui right floated date">{moment(data.createdAt).fromNow()}</span>
    </Card.Content>
  </Card>
);

const HeaderCard = ({ articles }) => {
  const latestArticles = articles.slice(-3);
  return latestArticles.map((article, i) => {
    while (i !== 1) {
      return (
        <Grid.Column key={article.slug} width={4} only="computer tablet">
          {headerCard(article)}
        </Grid.Column>
      );
    }
    return (
      <Grid.Column key={article.slug} width={8}>
        {headerCard(article)}
      </Grid.Column>
    );
  });
};

export default HeaderCard;
