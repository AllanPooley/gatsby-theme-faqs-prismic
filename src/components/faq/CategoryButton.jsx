/** @jsx jsx */
import { jsx } from 'theme-ui';

const CategoryButton = ({
  buttonStyles,
  buttonTextStyles,
  isActive,
  categoryText,
  setActiveCategoryHandler,
}) => (
  <button
    type="button"
    className={`category-button selection-button ${isActive ? 'active' : ''}`}
    onClick={(event) => setActiveCategoryHandler(event, categoryText)}
    aria-label={`Filter by ${categoryText} questions`}
    disabled={isActive}
    sx={buttonStyles(isActive)}
  >
    <span
      sx={buttonTextStyles}
    >
      {categoryText}
    </span>
  </button>
);

export default CategoryButton;
