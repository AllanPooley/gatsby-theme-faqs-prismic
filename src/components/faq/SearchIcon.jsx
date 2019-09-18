/** @jsx jsx */
import { jsx } from 'theme-ui';

export const SearchIcon = () => (
  <div
    className="search-icon"
    sx={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '20px',
      width: '18px',
      height: '18px',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      sx={{
        fill: 'primary',
      }}
    >
      <path fillRule="nonzero" d="M13.561 12.52l3.939 3.94a.86.86 0 1 1-1.215 1.215l-4.008-4.008a7.476 7.476 0 1 1 1.285-1.146zm-5.585.874a5.844 5.844 0 1 0 0-11.688 5.844 5.844 0 0 0 0 11.688z" />
    </svg>
  </div>
);

export default SearchIcon;
