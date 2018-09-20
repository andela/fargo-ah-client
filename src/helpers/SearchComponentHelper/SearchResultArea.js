import React from 'react';

const SearchResultArea = (displaySearchCards, pager) => (
  <div>
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
  </div>
);

export default SearchResultArea;
