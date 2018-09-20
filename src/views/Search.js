import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pagination, Icon, Message, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/HeaderComponent';
import SearchCard from '../components/SearchCard';
import Footer from '../components/Footer';
import FooterSlim from '../components/FooterSlim';
import { getArticlesByCriteria } from '../redux/actions/articleSearch';
import SelectListControl from '../components/commons/SelectListControl';
import isEmpty from '../helpers/isEmpty';


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

  componentWillReceiveProps(nextProps) {
    const { loading, articles } = nextProps.stateArticle;
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
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlePaginationChange = (e, { activePage }) => {
    const { criteria, searchfield, pageSize } = this.state;
    this.setState({ activePage });
    const newLocal = this;
    newLocal.props.getArticlesByCriteria(criteria, searchfield, pageSize, activePage);
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
    const selectOptions = [

      { label: 'Search By', value: 0 },
      { label: 'Author', value: 'author' },
      { label: 'Category', value: 'category' },
      { label: 'Tag', value: 'tag' },
      { label: 'Title', value: 'title' },
    ];

    if (searchWarning) {
      warningMessage = (
        <Message warning size="small">
          <Message.Header>
            You must select a search criteria
            <strong> (Search By) </strong>
            before making your search
            <i className="long arrow alternate right icon" />
          </Message.Header>
          <p>Search by author, category, tag or title from the dropdow box</p>
        </Message>
      );
    } else {
      warningMessage = '';
    }

    if (totalPages > 1) {
      pager = (
        <Pagination
          onPageChange={this.handlePaginationChange}
          activePage={activePage}
          ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          totalPages={totalPages}
        />
      );
    } else {
      pager = '';
    }

    if (loading) {
      displaySearchCards = (<Loader active inline="centered" />);
    }

    if (!isEmpty(article)) {
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

        <form onSubmit={this.onSubmit}>
          <div className="ui container">
            {warningMessage}
            <div className="ui action input fluid mt-50">
              <input
                type="text"
                name="searchfield"
                placeholder="Search for articles by author, category, tags or title..."
                value={searchfield}
                onChange={this.onInputChange}
              />
              <SelectListControl
                placeholder="Search By"
                name="criteria"
                value={criteria}
                onChange={this.onInputChange}
                options={selectOptions}
              />

            </div>

            <div className="ui container">
              <div className="ui grid mt-30 ui stackable">
                <div className="sixteen wide column"><button type="submit" className={`${loading ? 'loading' : ' '} ui right floated button`}>Search</button></div>
              </div>
            </div>
          </div>
        </form>


        <div className="ui container">
          <div className="ui grid mt-100">
            <div className="eight wide column"><h1 className="ui dividing header profile-hr">Search results</h1></div>
            <div className="four wide column" />
            <div className="four wide column" />
          </div>
        </div>

        <div className="ui container">
          <div className="ui grid stackable mt-100">
            {displaySearchCards}
          </div>
          <p className="mg-50" />
        </div>

        <div className="ui container">
          <div className="ui grid stackable mt-100">
            <div className="six wide column" />
            <div className="four wide column">

              {pager}

            </div>
            <div className="six wide column" />
          </div>
          <p className="mg-50" />
        </div>
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
