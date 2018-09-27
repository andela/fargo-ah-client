import React from 'react';
import PropTypes from 'prop-types';
import CreateSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import { Editor } from '@tinymce/tinymce-react';

// import tinymce from 'tinymce';

import {
  Grid,
  Form,
  Divider,
  Message,
  Label,
} from 'semantic-ui-react';
import Button from './Button';
import Header from './Header/HeaderComponent';

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
  insert_toolbar: 'fontselect quicktable, quickimage',
  selection_toolbar:
    'bold italic underline | styleselect | blockquote quicklink quickimage | forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  contextmenu: 'inserttable | cell row column deletetable',
};


const Article = ({
  history,
  user,
  tagOption,
  article,
  errors,
  handleSubmit,
  handleTitle,
  categoryList,
  tagList,
  handleCategoryChange,
  handleImageData,
  clearImagePath,
  handleBody,
  handleTagChange,
  handleRadioButtonChange,
  handlePrice,
  loading,
}) => (
  <div id="article">
    <Header text="Home" user={user} history={history} pathname="/" />

    <h1 className="create-article-header">Share your story with the world</h1>
    <Grid centered stackable>
      <Grid.Column centered width={12}>
        {errors.body && (
          <Message size="small" negative>
            <Message.Header>{errors.body}</Message.Header>
          </Message>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <textarea placeholder="Title" value={article.title} onChange={handleTitle} id="title" />
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
                isOptionSelected
                value={categoryList}
                onChange={handleCategoryChange}
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
                  onChange={handleImageData}
                />
              </label>
            </span>
          </Form.Field>
          <div className="body-image">
            <img src={clearImagePath} alt="" />
          </div>
          <Form.Field>
            <div className="article-body">
              <Editor id="body" value={article.body} init={bodyConfig} onChange={handleBody} />
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
                value={tagList}
                onChange={handleTagChange}
                options={tagOption}
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
                  checked={article.isPaidFor === false}
                  onChange={handleRadioButtonChange}
                />
                <Form.Radio
                  label="Premuim"
                  value="paid"
                  id="paid"
                  checked={article.isPaidFor === true}
                  onChange={handleRadioButtonChange}
                />
              </Form.Group>
            </Grid.Column>
            <Grid.Column>
              <Form.Field inline>
                <label htmlFor="price" style={{ textAlign: 'center' }}>
                  <p>Min: $0.28 - Max: $5.53</p>
                </label>
                <input
                  disabled={article.isPaidFor === false}
                  min="0.28"
                  max="5.53"
                  type="number"
                  value={article.price}
                  id="price"
                  placeholder="Amount"
                  onChange={handlePrice}
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

Article.propTypes = {
  tagOption: PropTypes.arrayOf(Object).isRequired,
  categoryList: PropTypes.arrayOf(Object).isRequired,
  tagList: PropTypes.arrayOf(Object).isRequired,
  article: PropTypes.shape({}),
  clearImagePath: PropTypes.string,
  errors: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleImageData: PropTypes.func.isRequired,
  handleBody: PropTypes.func.isRequired,
  handleTagChange: PropTypes.func.isRequired,
  handleRadioButtonChange: PropTypes.func.isRequired,
  handlePrice: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Article.defaultProps = {
  article: {
    title: '',
    description: 'This is from fargo',
    body: '',
    tagList: [],
    imageData: '',
    categorylist: [],
    isPaidFor: false,
    price: 0.28,
    readTime: 234,
  },
  clearImagePath: '',
};

export default Article;
