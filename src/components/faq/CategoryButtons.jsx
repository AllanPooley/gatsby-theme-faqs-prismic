/** @jsx jsx */
import { jsx } from 'theme-ui'
import { CategoryButton } from '.'
import { generateKey } from '../../util/helpers';

const CategoryButtons = (props) => {
  const {
    activeCategory,
    categories,
    setActiveCategoryHandler,
  } = props;
  return (
    <section className="category-buttons">
      <div className="container">
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
      </div>
    </section>
  );
};

export default CategoryButtons;
