import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WarningMessage from '../helpers/SearchComponentHelper/WarningMessage';
import Header from '../components/Header/HeaderComponent';
import SearchCard from '../components/SearchCard';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import { getArticlesByCriteria } from '../redux/actions/articleSearch';
import isObjectEmpty from '../helpers/isObjectEmpty';
import selectOptions from '../helpers/SearchComponentHelper/SelectOptions';
import Pager from '../helpers/SearchComponentHelper/Pager';
import SearchArticleForm from '../components/forms/SearchArticleForm';
import SearchResultArea from '../helpers/SearchComponentHelper/SearchResultArea';
import showLoader from '../helpers/SearchComponentHelper/DisplayCards';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: '',
      criteria: '',
      article: [],
      pageSize: 10,
      pageNumber: 1,
      loading: false,
      searchWarning: false,
      activePage: 1,
      boundaryRange: 1,
      siblingRange: 1,
      showEllipsis: true,
      showFirstAndLastNav: true,
      showPreviousAndNextNav: true,
      totalPages: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    // important
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { stateArticle } = this.props;
    if (stateArticle !== prevProps.stateArticle) {
      this.handleComponentState();
    }
  }

  onSubmit(e) {
    const { criteria, searchfield } = this.state;
    e.preventDefault();
    if (criteria === null || criteria === '0' || criteria === '') {
      this.setState({ searchWarning: true });
    } else {
      const newLocal = this;
      newLocal.props.getArticlesByCriteria(criteria, searchfield, 10, 1);
      this.setState({ searchWarning: false });
    }
    return true;
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    return true;
  }

  handlePaginationChange = (e, { activePage }) => {
    const { criteria, searchfield, pageSize } = this.state;
    this.setState({ activePage });
    const newLocal = this;
    newLocal.props.getArticlesByCriteria(criteria, searchfield, pageSize, activePage);
    return true;
  }

  handleComponentState() {
    const { stateArticle } = this.props;
    const { loading, articles } = stateArticle;
    const { pageSize } = this.state;
    if (loading) {
      this.setState({ loading: true });
    }
    if (articles !== null) {
      this.setState({
        article: articles.articles.rows,
        totalPages: Math.ceil(articles.articles.count / pageSize),
      });
    }
    return true;
  }

  render() {
    let displaySearchCards = '';
    let warningMessage;
    let pager;
    const {
      searchWarning, totalPages, activePage, article, searchfield, criteria,
    } = this.state;

    const newLocalVariable = this;
    const { loading } = newLocalVariable.props.stateArticle;

    if (searchWarning) {
      warningMessage = WarningMessage;
    } else {
      warningMessage = '';
    }

    if (totalPages > 1) {
      pager = Pager(this.handlePaginationChange, activePage, totalPages);
    } else {
      pager = '';
    }

    displaySearchCards = showLoader(loading);

    if (!isObjectEmpty(article)) {
      displaySearchCards = article.map((articleData, index) => (
        <div className={`${(1 + index) % 2 === 1 ? 'left' : 'right'} floated six wide column mb-70`} key={articleData.id}>
          <Link to={`/articles/${articleData.slug}`}>
            <SearchCard articles={articleData} />
          </Link>
        </div>
      ));
    }
    return (
      <div>
        <Header />
        {SearchArticleForm(
          this.onSubmit, warningMessage, searchfield,
          this.onInputChange, criteria, selectOptions, loading,
        )}
        { SearchResultArea(displaySearchCards, pager) }
        <Footer />
        <FooterSlim />
      </div>
    );
  }
}

Search.propTypes = {
  stateArticle: PropTypes.isRequired,
};

const mapStateToProps = state => ({
  stateArticle: state.articleSearchReducer,
});

export default connect(mapStateToProps, { getArticlesByCriteria })(Search);
