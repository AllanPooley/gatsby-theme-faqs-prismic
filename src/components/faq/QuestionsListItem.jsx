/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import Collapse from 'react-css-collapse'
import {
  HtmlContent,
} from '../common'

const QuestionsListItem = (props) => {
  const {
    question,
    answer,
  } = props;
  const [questionExpanded, setQuestionExpanded] = useState(false);
  return (
    <div
      className={`faq-question ${questionExpanded ? 'expanded' : ''}`}
      sx={{
        marginBottom: '60px',
        overflow: 'hidden',
      }}
    >
      <div
        className="top-container"
        sx={{
          borderBottom: '1.5px solid primary',
          marginBottom: '30px',
        }}
      >
        <button
          type="button"
          className="toggle-button"
          onClick={event => setQuestionExpanded(!questionExpanded)}
          aria-label={`See answer to "${question.text}"`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <h2
            className="the-question"
          >
            {question.text}
          </h2>
          <div
            className="icon"
            sx={{
              boxSizing: 'border-box',
              transition: 'transform 0.3s',
              width: '20px',
              height: '20px',
              transform: questionExpanded ? 'rotate(90deg)' : 'rotate(180deg)',
              position: 'relative',
              '&::before': {
                content: '',
                display: 'block',
                width: '20px',
                height: '0px',
                borderBottom: 'solid 2px primary',
                position: 'absolute',
                bottom: '9px',
                transform: 'rotate(90deg)',
                transition: 'width 0.3s',
              },
              '&::after': {
                content: '',
                display: 'block',
                width: '20px',
                height: '0px',
                borderBottom: 'solid 2px primary',
                position: 'absolute',
                bottom: '9px',
              },
            }}
          />
        </button>
      </div>
      <div className="bottom-container">
        <Collapse
          isOpen={questionExpanded}
          sx={{
            transition: 'height .33s cubic-bezier(.4, 0, .2, 1)'
          }}
        >
          <HtmlContent content={answer.html} />
        </Collapse>
      </div>
    </div>
  );
};

export default QuestionsListItem;
