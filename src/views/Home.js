import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Grid, Message, Header, Dimmer, Loader,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import HeaderComponent from '../components/Header/HeaderComponent';
import HeaderCard from '../components/HeaderCard';
import Button from '../components/Button';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import Card from '../components/Card';
import { AuthorsHavenDetails } from '../tests/__mocks__/mockData';
import getArticle from '../redux/actions/getArticle';
import socialAuthAction from '../redux/actions/socialAuthAction';
import process from '../../api';

export class Home extends Component {
  state = {
    verticalCard: (window.screen.width < 769) ? '' : 'vertical-card',
    horizontalPlain: (window.screen.width < 769) ? '' : 'horizontal-plain',
    sizeZero: (window.screen.width < 769) ? 1 : '',
    sizeThree: (window.screen.width < 769) ? 1 : 3,
    tabletWidth: (window.screen.width < 769) ? 8 : 5,
    loading: true,
  };

  componentDidMount() {
    const { loadArticle, loadedCategories, history } = this.props;
    const articlesRequest = {
      url: `${process.env.BACKEND_URL}/api/articles`,
      type: 'articles',
      method: 'get',
    };
    if (loadedCategories.length === 0) {
      const categoryRequest = {
        url: `${process.env.BACKEND_URL}/api/articles/list/categories`,
        type: 'category',
        method: 'get',
      };
      loadArticle(categoryRequest);
    }
    loadArticle(articlesRequest).then(() => {
      this.setState({
        loading: false,
      });
    });
    if (window.location.search.startsWith('?username')) {
      const temp = window.location.search.replace('?username=', '').replace('token=', '');
      const [username, token] = temp.split('&&');
      store.dispatch(socialAuthAction(username, token)).then(() => {
        history.push('/');
      });
    }
    window.addEventListener('resize', this.updateCards);
  }

  handleMenuItemClick = (url) => {
    const { history } = this.props;
    history.push(url);
  }

  updateCards = () => {
    this.setState((window.screen.width < 769 || window.innerWidth < 769)
      ? {
        verticalCard: '',
        horizontalPlain: '',
        sizeZero: 1,
        sizeThree: 1,
        tabletWidth: 8,
      }
      : {
        verticalCard: 'vertical-card',
        horizontalPlain: 'horizontal-plain',
        sizeZero: 0,
        sizeThree: 3,
        tabletWidth: 5,
      });
  }

  render() {
    const {
      location,
      currentUser,
      loadedArticles,
      loadedCategories,
      history,
    } = this.props;
    const {
      verticalCard,
      horizontalPlain,
      sizeZero,
      sizeThree,
      tabletWidth,
      loading,
    } = this.state;
    return (
      <div>
        <Dimmer page active={loading}>
          <Loader>Loading...</Loader>
        </Dimmer>
        <header className="header-bar">
          <HeaderComponent
            history={history}
            text={AuthorsHavenDetails.text}
            user={currentUser}
            pathname={location.pathname}
          />
        </header>
        <Menubar
          categorieslist={loadedCategories}
          handleClick={this.handleMenuItemClick}
        />
        <div className="header-image-card">
          <Grid id="header-card" stackable>
            <HeaderCard
              articles={loadedArticles.slice(0, 3)}
              tabletWidth={tabletWidth}
            />
          </Grid>
        </div>
        {Object.getOwnPropertyNames(currentUser).length === 0 ? (
          <section className="homepage-welcome-container">
            <div>
              <Grid.Row>
                <Grid.Column>
                  <Message>
                    <Header as="h2">Author’s Haven</Header>
                    <p>
                      Welcome to Authors Haven, writing or reading is not boring here!
                      <br />
                      Innovation, inspiration, and ideas constantly flow here. It is a lively
                      community. Don’t wait, engage!
                    </p>
                    <div>
                      <Link to="/login">
                        <Button floated="right" text={AuthorsHavenDetails.storyText} />
                      </Link>
                    </div>
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </div>
          </section>
        ) : null}
        <section className="homepage-container" stackable>
          <section className="featured-top-paid">
            <div className="featured">
              <h1 className="sub-heading">
                Featured
                <hr className="ruler" />
              </h1>
              <Card
                classStyle={verticalCard}
                articles={loadedArticles.slice(0, 2)}
                size={sizeZero}
              />
            </div>
            <div className="top-paid">
              <h1 className="sub-heading">
                Top paid
                <hr />
              </h1>
              <Card articles={loadedArticles.filter(article => article.isPaidFor && (article.price > 3)).slice(0, 2)} topPaid size={1} />
            </div>
          </section>
          <section className="trending">
            <h1 className="sub-heading">
              What&apos;s Trending
              <hr className="ruler" />
            </h1>
            <Card
              classStyle={horizontalPlain}
              articles={loadedArticles.slice(0, 6)}
              size={sizeThree}
            />
            <Link to="/">
              <Button
                className="more-button"
                text="more >"
              />
            </Link>
          </section>
        </section>
        <footer>
          <div className="top-footer">
            <Footer />
            <FooterSlim />
          </div>
        </footer>
      </div>
    );
  }
}

Home.defaultProps = {
  location: {},
  currentUser: {},
};

Home.propTypes = {
  location: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
  currentUser: PropTypes.shape(),
  loadArticle: PropTypes.func.isRequired,
  loadedArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ currentUser, loadedArticles, loadedCategories }) => ({
  currentUser,
  loadedArticles,
  loadedCategories,
});

export const mapDispatchToProps = dispatch => ({
  loadArticle: asyncData => dispatch(getArticle(asyncData)),
});

const ConnectedHomepage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default ConnectedHomepage;
