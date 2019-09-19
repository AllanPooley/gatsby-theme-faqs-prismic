/** @jsx jsx */
import { jsx } from 'theme-ui';

const ResultsCounter = ({ hasValue, numResults }) => (
  <div
    className="result-counter"
    sx={{
      display: 'block',
      width: '100%',
      height: hasValue ? '50px' : '0px',
      transition: 'height 0.3s ease',
      position: 'relative',
      zIndex: hasValue ? '1' : '-1',
    }}
  >
    <span
      className="num-results"
      sx={{
        position: 'absolute',
        left: '0',
        top: '0',
        fontSize: [0, 0, 0, 0],
        fontFamily: 'heading',
        fontWeight: 'regular',
        color: 'promptText',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        padding: '15px 20px',
        transform: hasValue ? 'translateY(0%)' : 'translateY(-20%)',
        opacity: hasValue ? '1' : '0',
        transition: hasValue ? 'transform 0.3s ease, opacity 0.3s ease' : '',
      }}
    >
      {`Found ${numResults} results`}
    </span>
  </div>
);

export default ResultsCounter;
