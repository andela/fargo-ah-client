import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';
import fetchData from '../redux/actions/getArticle';

import Menubar from '../components/Menubar';
import Card from '../components/Card';
import Button from '../components/Button';

export class Category extends Component {
  state = {
    horizontalSize: (window.screen.width < 769) ? 1 : 3,
    categoryArticles: [],
    loading: true,
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { loadData, history } = this.props;
    const path = history.location.pathname.split('/').pop();
    const loadedCategoryArticles = {
      url: `https://fargo-ah-staging.herokuapp.com/api/articles?category=${path}`,
      type: 'categoryArticles',
      method: 'get',
    };
    const categoryRequest = {
      url: 'https://fargo-ah-staging.herokuapp.com/api/articles/list/categories',
      type: 'category',
      method: 'get',
    };
    loadData(categoryRequest);
    loadData(loadedCategoryArticles).then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  handleMenuItemClick = (url) => {
    const { history } = this.props;
    history.push(url);
    this.getData();
  }

  render() {
    const {
      location, match: { params }, currentUser, loadedCategoryArticles, loadedCategories, history,
    } = this.props;
    const {
      horizontalSize,
      loading,
    } = this.state;

    return (
      <div>
        <Dimmer page active={loading}>
          <Loader>Loading articles</Loader>
        </Dimmer>
        <Header
          text="Home"
          user={currentUser}
          pathname={location.pathname}
          history={history}
        />
        <Menubar
          categorieslist={loadedCategories}
          handleClick={this.handleMenuItemClick}
        />
        <div className="homepage-container">
          <section className="trending">
            <h1 className="sub-heading">
              {`${params.title.charAt(0).toUpperCase()}${params.title.substr(1)}`}
              <hr className="ruler" />
            </h1>
            { loadedCategoryArticles.length > 0
              ? (
                <Card
                  articles={loadedCategoryArticles.slice(0, 21)}
                  size={horizontalSize}
                />
              ) : <h3>Oops!!, We could not find any article in this category</h3> }
            {(loadedCategoryArticles.length > 21)
              ? (
                <Link to="/">
                  <Button
                    className="more-button"
                    text="more >"
                  />
                </Link>
              )
              : ''}
          </section>
        </div>
        <footer>
          <div className="top-footer">
            <FooterSlim />
          </div>
        </footer>
      </div>
    );
  }
}

Category.defaultProps = {
  location: {},
  currentUser: null,
};

Category.propTypes = {
  location: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  loadData: PropTypes.func.isRequired,
  currentUser: PropTypes.shape(),
  loadedCategoryArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ currentUser, loadedCategoryArticles, loadedCategories }) => ({
  currentUser,
  loadedCategoryArticles,
  loadedCategories,
});

export const mapDispatchToProps = dispatch => ({
  loadData: asyncData => dispatch(fetchData(asyncData)),
});

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(Category);
export default ConnectedCategory;
