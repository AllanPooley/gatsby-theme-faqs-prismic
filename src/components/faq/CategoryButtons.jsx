/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  Wrapper,
} from '../common';
import { generateKey } from '../../util/helpers';

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

const CategoryButtons = (props) => {
  const {
    activeCategory,
    categories,
    setActiveCategoryHandler,
  } = props;
  return (
    <section className="category-buttons">
      <div className="container">
        <Wrapper>
          <div className="buttons">
            <button
              type="button"
              className={`category-button selection-button ${(activeCategory === null) ? 'active' : ''}`}
              onClick={event => setActiveCategoryHandler(event, null)}
              aria-label="Show questions from all categories"
            >
              <span>All</span>
            </button>
            {categories && categories.map((category, index) => (
              <CategoryButton
                key={generateKey(index)}
                isActive={activeCategory === category}
                categoryText={category}
                setActiveCategoryHandler={setActiveCategoryHandler}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default CategoryButtons;
