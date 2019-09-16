/** @jsx jsx */
import { jsx } from 'theme-ui';

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
              fontSize: '16px',
              width: '100%',
              margin: '0',
              padding: '12px 20px 10px 50px',
              boxShadow: 'none',
              color: 'text',
              borderRadius: '32px',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderColor: 'primary',
              backgroundColor: 'white',
              transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              sx={{
                fill: 'primary'
              }}
            >
              <path fillRule="nonzero" d="M13.561 12.52l3.939 3.94a.86.86 0 1 1-1.215 1.215l-4.008-4.008a7.476 7.476 0 1 1 1.285-1.146zm-5.585.874a5.844 5.844 0 1 0 0-11.688 5.844 5.844 0 0 0 0 11.688z" />
            </svg>
          </div>
        </label>
      </div>
    </section>
  );
};

export default SearchBar;
