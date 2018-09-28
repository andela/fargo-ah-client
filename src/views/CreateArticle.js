import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import tinymce from 'tinymce';
import creatArticle, { getAllTags, clearStore } from '../redux/actions/articleActions';
import Articles from '../components/Article';
import user from '../tests/__mocks__/mockData';

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearImagePath: '',
      image: '',
      article: {
        title: '',
        description: 'This id from fargo',
        body: '',
        tagList: [],
        imageData: '',
        categorylist: [],
        isPaidFor: false,
        price: 0.28,
        readTime: 234,
      },
      loading: false,
      errors: {},
      currentPath: '',
    };
  }


  componentDidMount() {
    const { getTags, match } = this.props;
    getTags();
  }

  handleImageData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      this.setState({
        clearImagePath: reader.result,
        image: file,
      });
    };
    return reader;
  };

  tagToOptions = (tag = []) => {
    const options = [];
    tag.map(val => options.push({ value: val, label: val }));
    return options;
  };

  optionsToTag = (options = []) => {
    const tagList = [];
    options.map(val => tagList.push(val.value.toLowerCase()));
    return tagList;
  };

  handleTagChange = (newValue) => {
    const tagList = this.optionsToTag(newValue);
    const { article } = this.state;
    this.setState({ article: { ...article, tagList } });
  };


  handleCategoryChange = (newValue) => {
    const categorylist = this.optionsToTag(newValue);
    const { article } = this.state;
    this.setState({ article: { ...article, categorylist } });
  };

  handleRadioButtonChange = (e) => {
    const { value } = e.target;
    const { article } = this.state;
    if (value === 'paid') {
      return this.setState({ article: { ...article, isPaidFor: true } });
    }
    return this.setState({ article: { ...article, isPaidFor: false } });
  };

  handlePrice = (e) => {
    const { article } = this.state;
    this.setState({ article: { ...article, price: Number(e.target.value) } });
  };

  handleTitle = (e) => {
    const { article } = this.state;
    this.setState({ article: { ...article, title: e.target.value } });
  };

  handleBody = (event) => {
    const { article } = this.state;
    const body = event.target.getContent();
    return this.setState({ article: { ...article, body } });
  };

  handleSubmit = () => {
    const {
      creatNewArticle,
      history,
    } = this.props;
    this.setState({ loading: true });
    return creatNewArticle(this.state)
      .then(() => {
        this.setState({ loading: false });
        history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.setState({ errors: err.response.data.errors });
      });
  };

  selectValues = (valueList) => {
    const values = [];
    valueList.map(val => values.push({ value: val, label: val }));
    return values;
  }

  render() {
    const { tags, history, currentUser } = this.props;
    const {
      article, errors, clearImagePath, loading,
    } = this.state;
    return (
      <div id="article">
        <Articles
          history={history}
          user={currentUser}
          tagOption={this.tagToOptions(tags)}
          article={article}
          errors={errors}
          handleSubmit={this.handleSubmit}
          handleTitle={this.handleTitle}
          handleCategoryChange={this.handleCategoryChange}
          handleImageData={this.handleImageData}
          clearImagePath={clearImagePath}
          categoryList={this.selectValues(article.categorylist)}
          tagList={this.selectValues(article.tagList)}
          handleBody={this.handleBody}
          handleTagChange={this.handleTagChange}
          handleRadioButtonChange={this.handleRadioButtonChange}
          handlePrice={this.handlePrice}
          text="Share your story with the world"
          loading={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.article.tags,
  currentUser: state.currentUser,
  article: {
    title: '',
    description: 'This id from fargo',
    body: '',
    tagList: [],
    imageData: '',
    categorylist: [],
    isPaidFor: false,
    price: 0.28,
    readTime: 234,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getTags: getAllTags,
    creatNewArticle: creatArticle,
    clearCurrentArticle: clearStore,
  },
  dispatch,
);

Article.propTypes = {
  tags: PropTypes.arrayOf(Object).isRequired,
  article: PropTypes.shape({}).isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  getTags: PropTypes.func.isRequired,
  creatNewArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
