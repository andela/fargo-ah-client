import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';
import { Parser as HtmlToReactParser } from 'html-to-react';
import {
  Container,
  Dimmer,
  Header,
  Icon,
  Menu,
  Loader,
} from 'semantic-ui-react';
import { EmailShareButton, WhatsappShareButton } from 'react-share';
import FacebookProvider, { Share } from 'react-facebook';

import getArticle from '../redux/actions/getArticle';
import HeaderComponent from '../components/Header/HeaderComponent';
import CommentSection from '../components/UserComment';
import getAllComments from '../redux/actions/commentActions';
import process from '../../api';

const htmlToReactParser = new HtmlToReactParser();

export class SingleArticle extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    const { loadArticle, match } = this.props;
    const { slug } = match.params;
    const singleArticleRequest = {
      url: `${process.env.BACKEND_URL}/api/articles/${slug.trim()}`,
      type: 'currentArticle',
    };
    loadArticle(singleArticleRequest).then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  componentDidUpdate(prevProp) {
    const { getArticleComments, currentArticle } = this.props;
    if (currentArticle.slug !== prevProp.currentArticle.slug) {
      getArticleComments(currentArticle.slug).then(() => {
        this.setState({
          loading: false,
        });
      });
    }
  }

  convertDataToReact = data => htmlToReactParser.parse(unescape(data));

  render() {
    const {
      currentArticle,
      history,
      currentUser,
      match,
      comment,
    } = this.props;
    const { loading } = this.state;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}
&text=${encodeURIComponent('I found this awesome article from Author\'s Haven')}
&hashtags=${encodeURIComponent('AuthorsHaven')}`;
    return (
      <div className="article-view">
        <Dimmer page active={loading}>
          <Loader>Loading articles</Loader>
        </Dimmer>
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
        { currentArticle.imageUrl ? (
          <Container className="image-width">
            <img className="article-image" src={currentArticle.imageUrl} alt="article top display" centered size="mini" />
          </Container>
        ) : null}
        <Container text>
          <div className="menu-icon">
            <Menu
              icon="labeled"
              vertical
            >
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <Menu.Item className="social-media-icon">
                  <Icon name="twitter" />
                Twitter
                </Menu.Item>

              </a>
              <FacebookProvider appId={process.env.APP_ID}>
                <Share
                  href={`${process.env.BASE_URL}${match.url}`}
                >
                  <Menu.Item>
                    <Icon name="facebook" />
                Share
                  </Menu.Item>
                </Share>
              </FacebookProvider>

              <EmailShareButton
                className="social-media-icon"
                subject="An Interesting Article from Author's Haven"
                url={window.location.href}
              >
                <Menu.Item>
                  <Icon name="mail" />
                   Email
                </Menu.Item>
              </EmailShareButton>
              <WhatsappShareButton
                url={window.location.href}
                title={currentArticle.title}
              >
                <Menu.Item className="social-media-icon">
                  <Icon name="whatsapp" />
                   Whatsapp
                </Menu.Item>
              </WhatsappShareButton>
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
  getArticleComments: PropTypes.func.isRequired,
  currentArticle: PropTypes.shape(),
  match: PropTypes.shape(),
  currentUser: PropTypes.shape(),
  loadArticle: PropTypes.func.isRequired,
  history: PropTypes.shape(),
  comment: PropTypes.shape(),
};

export const mapStateToProps = ({ currentArticle, currentUser, comment }) => ({
  currentArticle,
  currentUser,
  comment,
});

export const mapDispatchToProps = dispatch => ({
  loadArticle: asyncData => dispatch(getArticle(asyncData)),
  getArticleComments: slug => dispatch(getAllComments(slug)),
});

const ConnectedSingleArticle = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArticle);

export default ConnectedSingleArticle;
