import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select/lib/Creatable';
import { Editor } from '@tinymce/tinymce-react';
import {
  Grid, Form, Divider, Message,
} from 'semantic-ui-react';
import creatArticle, { getAllTags } from '../redux/actions/articleAction';
import Button from './Button';
import Header from './Header/HeaderComponent';


const categories = [
  { value: 'Politices', label: 'Politices' },
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
  insert_toolbar: 'quickimage quicktable',
  selection_toolbar:
    'bold italic underline | styleselect | blockquote quicklink quickimage | forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  contextmenu: 'inserttable | cell row column deletetable',
};

class Article extends Component {
  state = {
    article: {
      title: '',
      description: '',
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

  tagToOptions = (tag = []) => {
    const options = [];
    tag.map(val => options.push({ value: val, label: val }));
    return options;
  };

  OptionsToTag = (options = []) => {
    const tagList = [];
    options.map(val => tagList.push(val.value.toLowerCase()));
    return tagList;
  };

  handleTagChange = (newValue) => {
    const tagList = this.OptionsToTag(newValue);
    const { article } = this.state;
    this.setState({ article: { ...article, tagList } });
  };

  handleCategoryChange = (newValue) => {
    const categorylist = this.OptionsToTag(newValue);
    const { article } = this.state;
    this.setState({ article: { ...article, categorylist } });
  };

  handleRadioButtonChange = (e, { value }) => {
    const { article } = this.state;
    if (value === 'paid') {
      return this.setState({ article: { ...article, isPaidFor: true } });
    }
    this.setState({ article: { ...article, isPaidFor: false } });
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
    this.setState({ article: { ...article, body, description: `${body.substr(0, 100)}...` } });
  };

  handleSubmit = () => {
    const { creatNewArticle, history } = this.props;
    this.setState({ loading: true });
    return creatNewArticle(this.state)
      .then((response) => {
        this.setState({ loading: false });
        history.push(`/article/${response.payload.article.slug}`);
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.setState({ errors: err.response.data.errors });
      });
  };

  render() {
    const { tags } = this.props;
    const {
      article: { isPaidFor, price },
      loading,
      errors,
    } = this.state;
    return (
      <div id="article">
        <Header text="Home" user={null} pathname="/" />
        <h1 className="create-article-header">Share your story to the world</h1>
        <Grid centered stackable>
          <Grid.Column centered width={12}>
            { errors.body && (
            <Message size="small" negative>
              <Message.Header>
                {errors.body}
              </Message.Header>
            </Message>
            )}
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <textarea placeholder="Title" onChange={this.handleTitle} id="title" />
                <Divider />
              </Form.Field>
              <Form.Field>
                <div className="category">
                  <label htmlFor="category">
                    <p>Select category:</p>
                    <Select isMulti
                      name="category"
                      onChange={this.handleCategoryChange}
                      options={categories}
                    />
                  </label>
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
                    />
                  </label>
                </span>
              </Form.Field>
              <Form.Field>
                <div className="article-body">
                  <Editor id="body" init={bodyConfig} onChange={this.handleBody} />
                  <Divider />
                </div>
              </Form.Field>
              <Form.Field>
                <div className="tag">
                  <label htmlFor="tag">
                    <p>Let the world know where to look, Tag your story:</p>
                    <Select
                      isMulti
                      onChange={this.handleTagChange}
                      options={this.tagToOptions(tags)}
                    />
                  </label>
                </div>
              </Form.Field>
              <Grid columns={3} stackable>
                <Grid.Column>
                  <Form.Group>
                    <Form.Radio
                      label="Free"
                      value="free"
                      checked={isPaidFor === false}
                      onChange={this.handleRadioButtonChange}
                    />
                    <Form.Radio
                      label="Premuim"
                      value="paid"
                      checked={isPaidFor === true}
                      onChange={this.handleRadioButtonChange}
                    />
                  </Form.Group>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label htmlFor="price" style={{ textAlign: 'center' }}>
                      <p>Min: $0.28 - Max: $5.53</p>
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
                    </label>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <Button
                      disabled={loading}
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTags: getAllTags,
  creatNewArticle: creatArticle,
}, dispatch);

Article.propTypes = {
  tags: PropTypes.arrayOf(Object).isRequired,
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
