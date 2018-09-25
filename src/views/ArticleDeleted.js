import React, * as react from 'react';
import ArticleMessage from '../components/ArticleMessage';

class ArticleDeleted extends react.Component {
  render() {
    return (
      <div>
        <ArticleMessage firstText="Your article has been successfully deleted, click" path="/create" secondText="to create another article" />
      </div>
    );
  }
}
export default ArticleDeleted;
