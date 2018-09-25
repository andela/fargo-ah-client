import React, { Component } from 'react';
import ArticleMessage from '../components/ArticleMessage';

class ArticleCreated extends Component {
  state= {
    status: false,
  }

  render() {
    return (
      <div>
        <ArticleMessage firstText="Your article has been successfully deleted, click" path="/create" secondText="to create another article" />
      </div>
    );
  }
}
export default ArticleCreated;
