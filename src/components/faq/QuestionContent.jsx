/** @jsx jsx */
import { jsx } from 'theme-ui';
import Collapse from 'react-css-collapse';
import {
  HtmlContent,
} from '../common';

const QuestionContent = (props) => {
  const {
    questionExpanded,
    answer,
  } = props;
  return (
    <div
      className="question-content"
      sx={{
        maxWidth: '1000px',
        padding: [
          '0',
          '0 45px',
          '0 45px',
          '0 45px',
        ],
      }}
    >
      <Collapse
        isOpen={questionExpanded}
        sx={{
          transition: 'height .33s cubic-bezier(.4, 0, .2, 1)',
        }}
      >
        <HtmlContent
          content={answer.html}
        />
      </Collapse>
    </div>
  );
};

export default QuestionContent;
