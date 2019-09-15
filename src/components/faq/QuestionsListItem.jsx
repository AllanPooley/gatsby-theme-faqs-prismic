/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
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
        marginBottom: questionExpanded ? '60px' : '30px',
        overflow: 'hidden',
        transition: 'margin 0.3s ease',
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
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '0'
          }}
        >
          <Styled.h2
            className="the-question"
            sx={{
              maxWidth: '500px',
            }}
          >
            {question.text}
          </Styled.h2>
          <div
            className="icon"
            sx={{
              display: 'block',
              padding: '7.5px',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderColor: 'primary',
              borderRadius: '50%',
            }}
          >
            <div
              className="icon-container"
              sx={{
                boxSizing: 'border-box',
                transition: 'transform 0.3s',
                width: '20px',
                height: '20px',
                transform: questionExpanded ? 'rotate(90deg)' : 'rotate(180deg)',
                position: 'relative',
              }}
            >
              <div
                className="stroke-horizontal"
                sx={{
                  display: 'block',
                  width: questionExpanded ? '0px' : '20px',
                  height: '0px',
                  borderBottom: 'solid 2px',
                  borderColor: 'primary',
                  position: 'absolute',
                  bottom: '9px',
                }}
              />
              <div
                className="stroke-vertical"
                sx={{
                  content: '',
                  display: 'block',
                  width: '20px',
                  height: '0px',
                  borderBottom: 'solid 2px',
                  borderColor: 'primary',
                  position: 'absolute',
                  bottom: '9px',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'center',
                  transition: 'width 0.3s',
                }}
              />
            </div>
          </div>
        </button>
      </div>
      <div className="bottom-container">
        <Collapse
          isOpen={questionExpanded}
          sx={{
            transition: 'height .33s cubic-bezier(.4, 0, .2, 1)'
          }}
        >
          <HtmlContent
            content={answer.html}
          />
        </Collapse>
      </div>
    </div>
  );
};

export default QuestionsListItem;
