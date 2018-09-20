import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import Capitalize from '../helpers/Capitalize';

const Searchcard = ({ articles }) => {
  const article = articles;
  const category = article.categorylist[0] ? Capitalize(article.categorylist[0]) : '';
  return (
    <div>
      <div className="searchcard">
        <div className="ui container">
          <div className="ui column 8 wide" />
          <div className="ui column 8 wide" />
        </div>
        <p className="searchcardcategory">
          <strong>
            { category }
          </strong>
          <span className="pull-right">
            <i aria-hidden="true" className="thumbs up icon" />
            {article.likes}
          </span>
        </p>
        <p className="searchcardtitle"><strong>{article.title}</strong></p>
        <div>
          <Link to={`/profiles/${article.User.username}`}>
            <Image className="avatar" src={article.imageUrl} />
            {article.User.firstname}
            &nbsp;
            {article.User.lastname}
          </Link>
          <span className="ml-100 pull-right"><Moment fromNow>{article.createdAt}</Moment></span>
        </div>
      </div>
    </div>
  );
};

Searchcard.propTypes = {
  articles: PropTypes.isRequired,
};

export default Searchcard;
