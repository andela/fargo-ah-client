import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Button } from 'semantic-ui-react';
import moment from 'moment';


export const RenderDiv = () => (
  <div className="login">
    <h4>
            Go back to
      <Link to="/login">Login</Link>
    </h4>
  </div>
);

export const displayProfile = userProfile => (
  userProfile.user && userProfile.user.user && userProfile.user.user.firstname
    ? `${userProfile.user.user.firstname} ${userProfile.user.user.lastname}`
    : userProfile.user && userProfile.user.user
                && !userProfile.user.user.firstname
      ? userProfile.user.user.username : null
);

export const ProfileCard = (classStyle, article) => (
  <div key={article.slug}>
    <Card className={classStyle} articles={article}>
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

export const DisplayArticles = (isUser, hasArticles, sizeThree, profile, horizontalPlain) => (
  <div>
    {!isUser && !hasArticles ? (
      <div className="center-div write">
        <h3>
          This user has no articles yet
        </h3>
      </div>
    ) : isUser && !hasArticles ? (
      <div className="center-div write">
        <h3>
          This area is getting dusty, share a story
        </h3>
        <Button>share your story</Button>
      </div>
    ) : null}

    {hasArticles && profile.articles.articles

      ? (

        <Card.Group id="profile-card" itemsPerRow={sizeThree}>
          {profile.articles.articles.map(article => ProfileCard(horizontalPlain, article))}
        </Card.Group>
      )
      : null}
  </div>
);
