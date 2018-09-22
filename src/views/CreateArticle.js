import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import { Editor } from '@tinymce/tinymce-react';

/** To remove the "This domain is not registered with TinyMCE Cloud" message,
    remove the comment in line 12
*/
// import tinymce from 'tinymce';

import {
  Grid,
  Form,
  Divider,
  Message,
  Label,
} from 'semantic-ui-react';
import creatArticle, { getAllTags } from '../redux/actions/articleActions';
import Button from '../components/Button';
import Header from '../components/Header/HeaderComponent';

const categories = [
  { value: 'Politics', label: 'Politics' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Sports', label: 'Sports' },
];

const bodyConfig = {
  menubar: false,
  inline: true,
  theme: 'inlite',
  plugins: ['autolink', 'contextmenu', 'link', 'lists', 'media', 'table', 'textcolor'],
  toolbar: [
    'undo redo | bold italic underline |',
    'forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  ],
  insert_toolbar: 'fontselect quicktable quickimage',
  selection_toolbar:
    'bold italic underline | styleselect | blockquote quicklink quickimage | forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  contextmenu: 'inserttable | cell row column deletetable',
};

export class Article extends Component {
  state = {
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
  };

  componentDidMount() {
    const { getTags } = this.props;
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
    const { creatNewArticle, history } = this.props;
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

  render() {
    const { tags, history, currentUser } = this.props;
    const {
      article: { isPaidFor, price },
      loading,
      errors,
      clearImagePath,
    } = this.state;
    return (
      <div id="article">
        <Header text="Home" user={currentUser} history={history} pathname="/" />
        <h1 className="create-article-header">Share your story with the world</h1>
        <Grid centered stackable>
          <Grid.Column centered width={12}>
            {errors.body && (
              <Message size="small" negative>
                <Message.Header>{errors.body}</Message.Header>
              </Message>
            )}
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <textarea placeholder="Title" onChange={this.handleTitle} id="title" />
                <Divider />
              </Form.Field>
              <Form.Field>
                <div className="category">
                  <Label size="large" basic htmlFor="category">
                    <p>Select category:</p>
                  </Label>
                  <Select
                    isMulti
                    id="category"
                    onChange={this.handleCategoryChange}
                    options={categories}
                  />
                </div>
              </Form.Field>
              <Form.Field>
                <span className="image-button">
                  <label htmlFor="image">
                    Add Image
                    <input
                      placeholder="Add Image"
                      id="image"
                      accept="image/*"
                      type="file"
                      className="input"
                      onChange={this.handleImageData}
                    />
                  </label>
                </span>
              </Form.Field>
              <div className="body-image">
                <img src={clearImagePath} alt="" />
              </div>
              <Form.Field>
                <div className="article-body">
                  <Editor id="body" init={bodyConfig} onChange={this.handleBody} />
                  <Divider />
                </div>
              </Form.Field>
              <Form.Field>
                <div className="tag">
                  <Label basic size="large">
                    <p>Let the world know where to look, Tag your story:</p>
                  </Label>
                  <CreateSelect
                    isMulti
                    id="tag"
                    onChange={this.handleTagChange}
                    options={this.tagToOptions(tags)}
                  />
                </div>
              </Form.Field>
              <Grid columns={2} stackable>
                <Grid.Column>
                  <Form.Group>
                    <Form.Radio
                      label="Free"
                      value="free"
                      id="free"
                      checked={isPaidFor === false}
                      onChange={this.handleRadioButtonChange}
                    />
                    <Form.Radio
                      label="Premuim"
                      value="paid"
                      id="paid"
                      checked={isPaidFor === true}
                      onChange={this.handleRadioButtonChange}
                    />
                  </Form.Group>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field inline>
                    <label htmlFor="price" style={{ textAlign: 'center' }}>
                      <p>Min: $0.28 - Max: $5.53</p>
                    </label>
                    <input
                      disabled={isPaidFor === false}
                      min="0.28"
                      max="5.53"
                      type="number"
                      value={price}
                      id="price"
                      placeholder="Amount"
                      onChange={this.handlePrice}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid>
              <Grid columns={3} centered stackable>
                <Grid.Column />
                <Grid.Column />
                <Grid.Column>
                  <Form.Field>
                    <Button
                      disabled={loading}
                      className="btn-dark"
                      loading={loading}
                      fluid
                      floated="right"
                      text="Publish"
                      type="submit"
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.article.tags,
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getTags: getAllTags,
    creatNewArticle: creatArticle,
  },
  dispatch,
);

Article.propTypes = {
  tags: PropTypes.arrayOf(Object).isRequired,
  getTags: PropTypes.func.isRequired,
  creatNewArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape().isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
