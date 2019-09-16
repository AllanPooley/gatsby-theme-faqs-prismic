/** @jsx jsx */
import { jsx } from 'theme-ui';
import { CategoryButton } from '.';
import { generateKey } from '../../util/helpers';


const ButtonStyles = (isActive) => ({
  display: 'inline-block',
  borderRadius: '36px',
  backgroundColor: isActive ? 'primaryDark' : 'primary',
  padding: '10px 20px',
  textDecoration: 'none',
  transition: 'color 0.3s ease, background-color 0.3s ease',
  marginRight: '10px',
  marginBottom: [
    '10px',
    '10px',
    '10px',
    '0px',
  ],
  '&:hover': {
    backgroundColor: 'primaryDark',
    cursor: isActive ? 'default' : 'pointer',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
});

const ButtonTextStyles = {
  display: 'block',
  width: '100%',
  color: 'white',
  fontSize: '14px',
  textAlign: 'center',
};

const CategoryButtons = (props) => {
  const {
    activeCategory,
    categories,
    setActiveCategoryHandler,
  } = props;
  return (
    <section
      className="category-buttons"
      sx={{
        width: '100%',
        maxWidth: '800px',
        marginRight: 'auto',
      }}
    >
      <div className="container">
        <div
          className="buttons"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            className="category-button"
            onClick={(event) => setActiveCategoryHandler(event, null)}
            aria-label="Show questions from all categories"
            sx={ButtonStyles(activeCategory === null)}
          >
            <span
              sx={ButtonTextStyles}
            >
              All
            </span>
          </button>
          {categories && categories.map((category, index) => (
            <CategoryButton
              key={generateKey(index)}
              buttonStyles={ButtonStyles}
              buttonTextStyles={ButtonTextStyles}
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
