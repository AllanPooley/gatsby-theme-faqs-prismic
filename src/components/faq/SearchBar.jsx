/** @jsx jsx */
import { jsx } from 'theme-ui';
import { SearchIcon } from '.';

export const SearchBar = (props) => {
  const {
    searchActive,
    searchQuery,
    setSearchHandler,
    searchFocusHandler,
  } = props;
  const classes = `${searchActive ? ' active' : ''}${(searchQuery !== '') ? ' has-value' : ''}`;
  return (
    <section
      className="faq-search-bar"
      sx={{
        width: '100%',
        maxWidth: '800px',
        position: 'relative',
        marginRight: 'auto',
        marginBottom: '20px',
      }}
    >
      <div
        className="container"
        sx={{
          marginLeft: 'auto',
        }}
      >
        <label
          className={`search${classes}`}
          htmlFor="search"
          aria-label="Search"
          sx={{
            position: 'relative',
            margin: '0',
          }}
        >
          <input
            name="search"
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchHandler(event)}
            onFocus={(event) => searchFocusHandler(event, true)}
            onBlur={(event) => searchFocusHandler(event, false)}
            sx={{
              variant: 'textStyles.controls',
              fontSize: '16px',
              width: '100%',
              margin: '0',
              padding: '10px 20px 10px 50px',
              boxShadow: 'none',
              color: 'text',
              borderRadius: 'controlBorderRadius',
              borderWidth: 'controlBorderWidth',
              borderStyle: 'solid',
              borderColor: 'controlBorder',
              backgroundColor: 'transparent',
              transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
              '::-webkit-input-placeholder': {
                color: 'placeholderText',
              },
              ':-moz-placeholder': {
                color: 'placeholderText',
              },
              '::-moz-placeholder': {
                color: 'placeholderText',
              },
              ':-ms-input-placeholder': {
                color: 'placeholderText',
              },
              '&:focus, &:active': {
                outline: 'none',
              },
            }}
          />
          <div
            className="search-icon"
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '20px',
              width: '18px',
              height: '18px',
            }}
          >
            <SearchIcon />
          </div>
        </label>
      </div>
    </section>
  );
};

export default SearchBar;
