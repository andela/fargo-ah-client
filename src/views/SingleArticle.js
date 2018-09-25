import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';
import { Parser as HtmlToReactParser } from 'html-to-react';
import {
  Container,
  Header,
  Icon,
  Menu,
} from 'semantic-ui-react';

import fetchData from '../redux/actions/fetchData';
import HeaderComponent from '../components/Header/HeaderComponent';
import CommentSection from '../components/UserComment';
import getAllComments from '../redux/actions/commentActions';


const htmlToReactParser = new HtmlToReactParser();

export class SingleArticle extends Component {
  componentDidMount() {
    const { loadData, match } = this.props;
    const { slug } = match.params;
    const singleArticleRequest = {
      url: `https://fargo-ah-staging.herokuapp.com/api/articles/${slug.trim()}`,
      type: 'currentArticle',
    };
    loadData(singleArticleRequest);
  }

  componentDidUpdate(prevProp) {
    const { getArticleComments, currentArticle } = this.props;
    if (currentArticle.slug !== prevProp.currentArticle.slug) {
      getArticleComments(currentArticle.slug);
    }
  }

  convertDataToReact = data => htmlToReactParser.parse(unescape(data));

  render() {
    const {
      currentArticle,
      history,
      currentUser,
      comment,
    } = this.props;
    return (
      <div className="article-view">
        <HeaderComponent text="Home" history={history} user={currentUser} pathname="/" />
        <Container text style={{ marginTop: '2em' }}>
          <Header className="article-title" as="h1">
            {this.convertDataToReact(currentArticle.title)}
          </Header>
          <div className="published-date-text">
            <span>
            Written by:
              {'   '}
              <Link to="/profile">
                {currentArticle.author ? currentArticle.author.username : 'waiting for article data to load ..'}
              </Link>
            </span>
            <span>
            Published:
              {' '}
              {moment(currentArticle.createdAt).fromNow()}
            </span>
          </div>
        </Container>
        <Container className="image-width">
          <img className="article-image" src={currentArticle.imageUrl} alt="article top display" centered size="mini" />
        </Container>
        <Container text>
          <div className="menu-icon">
            <Menu
              icon="labeled"
              vertical
            >
              <Menu.Item>
                <Icon name="twitter" />
                Twitter
              </Menu.Item>
              <Menu.Item>
                <Icon name="facebook" />
                Share
              </Menu.Item>
              <Menu.Item>
                <Icon name="mail" />
                Email
              </Menu.Item>
            </Menu>
          </div>
          <div className="article-body">{this.convertDataToReact(currentArticle.body)}</div>
        </Container>
        <CommentSection slug={currentArticle.slug} comments={comment.comments} />
      </div>
    );
  }
}

SingleArticle.defaultProps = {
  currentArticle: {},
  match: {},
  history: {},
  currentUser: {},
  comment: {},
};

SingleArticle.propTypes = {
  currentArticle: PropTypes.shape(),
  getArticleComments: PropTypes.shape().isRequired,
  match: PropTypes.shape(),
  currentUser: PropTypes.shape(),
  loadData: PropTypes.func.isRequired,
  history: PropTypes.shape(),
  comment: PropTypes.shape(),
};

export const mapStateToProps = ({ currentArticle, currentUser, comment }) => ({
  currentArticle,
  currentUser,
  comment,
});

export const mapDispatchToProps = dispatch => ({
  loadData: asyncData => dispatch(fetchData(asyncData)),
  getArticleComments: slug => dispatch(getAllComments(slug)),
});

const ConnectedSingleArticle = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArticle);

export default ConnectedSingleArticle;
