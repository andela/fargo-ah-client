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

  convertDataToReact = data => htmlToReactParser.parse(unescape(data));

  render() {
    const { currentArticle, history, currentUser } = this.props;
    return (
      <div className="article-view">
        <HeaderComponent text="Home" history={history} user={currentUser} pathname="/" />
        <Container text style={{ marginTop: '2em' }}>
          <Header className="article-title" as="h1">
            {this.convertDataToReact(currentArticle.title)}
            <Link to="/edit">Edit</Link>
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
      </div>
    );
  }
}

SingleArticle.defaultProps = {
  currentArticle: {},
  match: {},
  history: {},
  currentUser: null,
};

SingleArticle.propTypes = {
  currentArticle: PropTypes.shape(),
  match: PropTypes.shape(),
  currentUser: PropTypes.shape(),
  loadData: PropTypes.func.isRequired,
  history: PropTypes.shape(),
};

export const mapStateToProps = ({ currentArticle, currentUser }) => ({
  currentArticle,
  currentUser,
});

export const mapDispatchToProps = dispatch => ({
  loadData: asyncData => dispatch(fetchData(asyncData)),
});

const ConnectedSingleArticle = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArticle);

export default ConnectedSingleArticle;
