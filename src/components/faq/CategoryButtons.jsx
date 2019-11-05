/** @jsx jsx */
import { jsx } from 'theme-ui';
import { CategoryButton } from '.';
import { generateKey } from '../../util/helpers';


const ButtonStyles = (isActive) => ({
  display: 'inline-block',
  borderRadius: 'controlBorderRadius',
  borderStyle: 'solid',
  borderWidth: 'controlBorderWidth',
  borderColor: isActive ? 'controlBorderActive' : 'controlBorder',
  backgroundColor: isActive ? 'controlBackgroundActive' : 'controlBackground',
  padding: '10px 20px',
  variant: 'textStyles.controls',
  color: isActive ? 'controlTextActive' : 'controlText',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
  marginRight: '10px',
  marginBottom: '10px',
  '&:hover': {
    color: 'controlTextActive',
    backgroundColor: 'controlBackgroundHover',
    borderColor: 'controlBorderHover',
    cursor: isActive ? 'default' : 'pointer',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
});

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
            All
          </button>
          {categories && categories.map((category, index) => (
            <CategoryButton
              key={generateKey(index)}
              buttonStyles={ButtonStyles}
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
