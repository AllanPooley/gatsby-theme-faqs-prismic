/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  CategoryButtons,
  SearchBar,
} from '.'
import { Wrapper } from '../common'

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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CategoryButtons
            activeCategory={activeCategory}
            categories={uniqueCategories}
            setActiveCategoryHandler={setActiveCategoryHandler}
          />
          <SearchBar
            searchActive={searchActive}
            searchQuery={searchQuery}
            setSearchHandler={setSearchHandler}
            searchFocusHandler={searchFocusHandler}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default ControlPanel;
