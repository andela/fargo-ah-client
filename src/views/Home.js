import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Message, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import HeaderComponent from '../components/Header/HeaderComponent';
import HeaderCard from '../components/HeaderCard';
import Button from '../components/Button';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import Card from '../components/Card';
import { user, articles, AuthorsHavenDetails } from '../tests/__mocks__/mockData';
import categoriesData from '../tests/__mocks__/categoryData';

import fetchData from '../redux/actions/fetchData';

class Home extends Component {
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
    console.log('Hey... I will be fetching data');
  }

  render() {
    const {
      location, currentUser, loadedArticles, loadedCategories,
    } = this.props;
    console.log(location, currentUser, loadedArticles, loadedCategories);
    return (
      <div>
        <header className="header-bar">
          <HeaderComponent
            text={AuthorsHavenDetails.text}
            user={user}
            pathname={location.pathname}
          />
        </header>
        <Menubar categorieslist={categoriesData.categorieslist} />
        <div className="header-image-card">
          <Grid id="header-card" stackable>
            <HeaderCard articles={articles.articles} />
          </Grid>
        </div>
        {!currentUser ? (
          <section className="homepage-welcome-container">
            <div>
              <Grid.Row>
                <Grid.Column>
                  <Message>
                    <Header as="h2">Author’s Haven</Header>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div>
                      <Link to="/write">
                        <Button floated="right" text={AuthorsHavenDetails.storyText} />
                      </Link>
                    </div>
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </div>
          </section>) : null
        }
        <section className="homepage-container" stackable>
          <section className="featured-top-paid">
            <div className="featured">
              <h1 className="sub-heading">
                Featured
                <hr className="ruler" />
              </h1>
              <Card
                classStyle={(window.screen.width > 768) ? 'vertical-card' : ''}
                articles={articles.articles.slice(0, 2)}
                size={(window.screen.width < 768) ? 1 : ''}
              />
            </div>
            <div className="top-paid">
              <h1 className="sub-heading">
                Top paid
                <hr />
              </h1>
              <Card articles={articles.articles.slice(0, 2)} size={1} />
            </div>
          </section>
          <section className="trending">
            <h1 className="sub-heading">
              What&apos;s Trending
              <hr className="ruler" />
            </h1>
            <Card classStyle={(window.screen.width > 768) ? 'horizontal-plain' : ''} articles={articles.articles.slice(0, 6)} size={(window.screen.width > 768) ? 3 : 1} />
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
  loadData: {},
  loadedArticles: {},
  loadedCategories: {},
};

Home.propTypes = {
  location: PropTypes.shape(),
  currentUser: PropTypes.shape(),
  loadData: PropTypes.func,
  loadedArticles: PropTypes.shape(),
  loadedCategories: PropTypes.shape(),
};

const mapStateToProps = ({ loggedInUser, loadedArticles, loadedCategories }) => ({
  currentUser: loggedInUser,
  loadedArticles,
  loadedCategories,
});


const mapDispatchToProps = dispatch => ({
  loadData: asyncData => dispatch(fetchData(asyncData)),
});

const ConnectedHomepage = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHomepage;
