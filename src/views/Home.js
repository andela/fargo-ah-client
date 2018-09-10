import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Header from '../components/Header/HeaderComponent';
import HeaderCard from '../components/HeaderCard';
import Button from '../components/Button';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import VerticalCardGroup from '../components/verticalGroupCard';
import HorizontalCardGroup from '../components/HorizontalCard';
import { articles, AuthorsHavenDetails } from '../tests/__mocks__/mockData';

import fetchData from '../redux/actions/fetchData';

export class Home extends Component {
  state = {};

  componentDidMount() {
    const { loadData } = this.props;
    const articlesRequest = {
      url: 'http://localhost:3000/api/articles/',
      type: 'articles',
    };
    const categoryRequest = {
      url: 'http://localhost:3000/api/articles/',
      type: 'category',
    };

    loadData(articlesRequest);
    loadData(categoryRequest);
  }

  render() {
    const {
      location, currentUser, loadedArticles, loadedCategories,
    } = this.props;

    // console.log(Array.isArray(loadedCategories));

    return (
      <div>
        <header className="header-bar">
          <Header
            text={AuthorsHavenDetails.text}
            user={currentUser}
            pathname={location.pathname}
          />
        </header>
        <Menubar categorieslist={loadedCategories} />
        <div className="header-image-card">
          <Grid id="header-card" stackable>
            <HeaderCard articles={articles.articles} />
          </Grid>
        </div>
        {
          (!currentUser)
            ? (
              <section className="homepage-welcome-container">
                <div className="homepage-welcome">
                  <div className="homepage-welcome-text">
                    <h2>Author’s Haven</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="homepage-welcome-button">
                    <Link to="/write">
                      <Button text={AuthorsHavenDetails.storyText} />
                    </Link>
                  </div>
                </div>
              </section>
            )
            : null
        }
        <section className="homepage-container">
          <section className="featured-top-paid">
            <div className="featured">
              <h1 className="sub-heading">
                Featured
                <hr className="ruler" />
              </h1>
              <VerticalCardGroup
                articles={articles.articles.slice(0, 2)}
              />
            </div>
            <div className="top-paid">
              <h1 className="sub-heading">
                Top paid
                <hr />
              </h1>
              <HorizontalCardGroup
                articles={articles.articles.slice(0, 2)}
                size={1}
              />
            </div>
          </section>
          <section className="trending">
            <h1 className="sub-heading">
              What&apos;s Trending
              <hr className="ruler" />
            </h1>
            <HorizontalCardGroup
              classStyle="horizontal-plain"
              articles={articles.articles.slice(0, 6)}
              size={3}
            />
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
  currentUser: null,
  loadedArticles: {},
};

Home.propTypes = {
  location: PropTypes.shape(),
  currentUser: PropTypes.shape(),
  loadedArticles: PropTypes.shape(),
  loadedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUser, loadedArticles, loadedCategories }) => ({
  currentUser,
  loadedArticles,
  loadedCategories,
});


const mapDispatchToProps = dispatch => ({
  loadData: asyncData => dispatch(fetchData(asyncData)),
});

const ConnectedHomepage = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHomepage;
