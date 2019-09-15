/** @jsx jsx */
import { jsx } from 'theme-ui'

const CategoryButton = ({ isActive, categoryText, setActiveCategoryHandler }) => (
  <button
    type="button"
    className={`category-button selection-button ${isActive ? 'active' : ''}`}
    onClick={event => setActiveCategoryHandler(event, categoryText)}
    aria-label={`Filter by ${categoryText} questions`}
    disabled={isActive}
    sx={{
      display: 'inline-block',
      borderRadius: '36px',
      backgroundColor: isActive ? 'primaryDark' : 'primary',
      padding: '10px 20px',
      textDecoration: 'none',
      transition: 'color 0.3s ease, background-color 0.3s ease',
      marginRight: '15px',
      '&:hover': {
        backgroundColor: 'primaryDark',
        cursor: isActive ? 'default' : 'pointer',
      },
      '&:focus, &:active': {
        outline: 'none',
      },
    }}
  >
    <span
      sx={{
        display: 'block',
        width: '100%',
        color: 'white',
        fontSize: '14px',
        textAlign: 'center',
      }}
    >
      {categoryText}
    </span>
  </button>
);

export default CategoryButton;
