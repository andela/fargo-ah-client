import React from 'react';
import SelectListControl from '../commons/SelectListControl';

const SearchArticleForm = (
  formSubmit, warning, textfield,
  inputChange, criteria, selectOptions, loading,
) => (
  <form onSubmit={formSubmit}>
    <div className="ui container">
      {warning}
      <div className="ui action input fluid mt-50">
        <input
          type="text"
          name="searchfield"
          placeholder="Search for articles by author, category, tags or title..."
          value={textfield}
          onChange={inputChange}
        />
        <SelectListControl
          placeholder="Search By"
          name="criteria"
          value={criteria}
          onChange={inputChange}
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
);

export default SearchArticleForm;
