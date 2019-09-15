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
            sx={{
              display: 'inline-block',
              borderRadius: '36px',
              backgroundColor: 'primary',
              padding: '10px 20px',
              textDecoration: 'none',
              transition: 'color 0.3s ease, background-color 0.3s ease',
              marginRight: '15px',
              '&:hover': {
                backgroundColor: 'primaryDark',
                cursor: 'pointer',
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
              All
            </span>
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
