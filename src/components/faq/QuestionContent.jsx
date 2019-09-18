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
        padding: [
          '0',
          '0 45px',
          '0 45px',
          '0 45px',
        ],
        backgroundColor: 'answerBackground',
      }}
    >
      <Collapse
        isOpen={questionExpanded}
        sx={{
          transition: 'height .33s cubic-bezier(.4, 0, .2, 1)',
        }}
      >
        <div
          className="text-container"
          sx={{
            maxWidth: '900px',
          }}
        >
          <HtmlContent
            content={answer.html}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default QuestionContent;
