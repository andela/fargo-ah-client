import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const headerCard = (data, end) => (
  <Card>
    <Image src={data.imageUrl} />
    <Card.Content>
      <Card.Header>{data.categorylist[0]}</Card.Header>
      <Card.Description>
        <Link to={`/articles/${data.slug}`}>
          {
            (data.title.length > end)
              ? `${data.title.substring(0, end)}...`
              : data.title
          }
        </Link>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to={`/profiles/${data.author.username}`}>
        <Image
          src={data.author.image ? data.author.image : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'}
        />
        {data.author.firstname || data.author.username}
      </Link>
      <span className="ui right floated date">
        {moment(data.createdAt).fromNow()}
      </span>
    </Card.Content>
  </Card>
);

const HeaderCard = ({ articles, tabletWidth }) => {
  const latestArticles = articles.slice(-3);
  return latestArticles.map((article, i) => {
    while (i !== 1) {
      return (
        <Grid.Column key={article.slug} width={tabletWidth} only="computer tablet">
          {headerCard(article, 50)}
        </Grid.Column>
      );
    }
    return (
      <Grid.Column key={article.slug} width={6} only="computer mobile">
        {headerCard(article, 140)}
      </Grid.Column>
    );
  });
};

export default HeaderCard;
