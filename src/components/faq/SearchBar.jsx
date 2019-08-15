import React from 'react';
import {
  Wrapper,
} from '../common';

export const SearchBar = (props) => {
  const {
    searchActive,
    searchQuery,
    setSearch,
    searchFocusHandler,
  } = props;
  const classes = `${searchActive ? ' active' : ''}${(searchQuery !== '') ? ' has-value' : ''}`;
  return (
    <section className="faq-search-bar">
      <div className="container">
        <Wrapper>
          <label className={`search${classes}`} htmlFor="search" aria-label="Search">
            <input
              name="search"
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchQuery}
              onChange={event => setSearch(event)}
              onFocus={event => searchFocusHandler(event, true)}
              onBlur={event => searchFocusHandler(event, false)}
            />
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                <path fillRule="nonzero" d="M13.561 12.52l3.939 3.94a.86.86 0 1 1-1.215 1.215l-4.008-4.008a7.476 7.476 0 1 1 1.285-1.146zm-5.585.874a5.844 5.844 0 1 0 0-11.688 5.844 5.844 0 0 0 0 11.688z" />
              </svg>
            </div>
          </label>
        </Wrapper>
      </div>
    </section>
  );
};

export default SearchBar;
