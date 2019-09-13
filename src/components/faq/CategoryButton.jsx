/** @jsx jsx */
import { jsx } from 'theme-ui'

const CategoryButton = ({ isActive, categoryText, setActiveCategoryHandler }) => (
  <button
    type="button"
    className={`category-button selection-button ${isActive ? 'active' : ''}`}
    onClick={event => setActiveCategoryHandler(event, categoryText)}
    aria-label={`Filter by ${categoryText} questions`}
  >
    <span>{categoryText}</span>
  </button>
);

export default CategoryButton;
