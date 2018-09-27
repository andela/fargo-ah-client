import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import moment from 'moment';


export const RenderDiv = () => (
  <div className="login">
    <h4>
      {'Go back to'}
      <Link to="/login">Login</Link>
    </h4>
  </div>
);

export const ProfileCard = (classStyle, article) => (
  <div>
    <Card className={classStyle} articles={article} key={article.slug}>
      <Card.Content>
        <Card.Meta>
          {article.categorylist[0]}
        </Card.Meta>
        <Card.Header id="card-header">
          <Link to={`/articles/${article.slug}`}>
            {article.title.length > 44 ? `${article.title.substring(0, 34)}...` : article.title}
          </Link>
        </Card.Header>
        <Card.Description>
          <p className="ui left floated">
            <Icon name="thumbs up" />
            {article.likes}
          </p>
          <span className="right floated">{moment(article.createdAt).fromNow()}</span>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>

);
