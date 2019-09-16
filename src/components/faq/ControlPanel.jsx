/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  CategoryButtons,
  SearchBar,
} from '.';
import { Wrapper } from '../common';

const ControlPanel = (props) => {
  const {
    activeCategory,
    uniqueCategories,
    setActiveCategoryHandler,
    searchActive,
    searchQuery,
    searchFocusHandler,
    setSearchHandler,
  } = props;
  return (
    <div
      className="control-panel"
      sx={{
        padding: '50px 0',
      }}
    >
      <Wrapper>
        <div
          className="container"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SearchBar
            searchActive={searchActive}
            searchQuery={searchQuery}
            setSearchHandler={setSearchHandler}
            searchFocusHandler={searchFocusHandler}
          />
          <CategoryButtons
            activeCategory={activeCategory}
            categories={uniqueCategories}
            setActiveCategoryHandler={setActiveCategoryHandler}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ControlPanel;
