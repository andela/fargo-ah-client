import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'tinymce';
import { getAllTags, clearStore } from '../redux/actions/articleActions';
import editArticle from '../redux/actions/editArticleAction';
import Articles from '../components/Article';
import user from '../tests/__mocks__/mockData';

export class EditArticle extends Component {
  constructor(props) {
    super(props);
    const { article } = props;
    this.state = {
      clearImagePath: article.imageUrl || '',
      image: article.imageUrl || '',
      article: {
        title: article.title || ' ',
        description: 'This id from fargo',
        body: article.body || '',
        tagList: article.tagList || [],
        imageData: article.imageData || '',
        imageUrl: article.imageUrl || '',
        categorylist: article.categorylist || [],
        isPaidFor: article.isPaidFor || false,
        price: Number(article.price) || 0.28,
        readTime: 234,
      },
      loading: false,
      errors: {},
      currentPath: '',
    };
  }


  componentDidMount() {
    const { getTags } = this.props;
    getTags();
  }

  handleImageData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener('load', () => this.setState({
      clearImagePath: reader.result,
      image: file,
    }));
    return true;
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
    return true;
  };

  handleCategoryChange = (newValue) => {
    const categorylist = this.optionsToTag(newValue);
    const { article } = this.state;
    this.setState({ article: { ...article, categorylist } });
    return true;
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
    return true;
  };

  handleTitle = (e) => {
    const { article } = this.state;
    this.setState({ article: { ...article, title: e.target.value } });
    return true;
  };

  handleBody = (event) => {
    const { article } = this.state;
    const body = event.target.getContent();
    return this.setState({ article: { ...article, body } });
  };

  handleSubmit = () => {
    const {
      updateArticle,
      history,
      match,
    } = this.props;

    this.setState({ loading: true });
    return updateArticle(this.state, match.params.slug)
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
    const { tags, history } = this.props;
    const {
      article,
      loading,
      errors,
      clearImagePath,
    } = this.state;
    return (
      <div id="article">
        <Articles
          history={history}
          user={user}
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
          loading={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.article.tags,
  article: state.currentArticle,

});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getTags: getAllTags,
    updateArticle: editArticle,
    clearCurrentArticle: clearStore,
  },
  dispatch,
);

EditArticle.propTypes = {
  tags: PropTypes.arrayOf(Object).isRequired,
  article: PropTypes.shape({}).isRequired,
  getTags: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updateArticle: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditArticle);
