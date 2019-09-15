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
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottom: '1.5px solid primary',
          marginBottom: '30px',
        }}
      >
        <button
          type="button"
          className="toggle-button"
          // onClick={event => setQuestionExpanded(!questionExpanded)}
          aria-label={`Copy a link to question: "${question.text}"`}
          sx={{
            height: '35px',
            width: '24px',
            marginRight: '20px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 88"
            sx={{
              height: '100%',
              width: '100%',
            }}
          >
            <path d="M53.9655 46.8234c.7779 2.6163.1415 5.5154-1.7677 7.4246l-25.173 25.173c-2.8992 2.8992-7.566 2.8992-10.4652 0l-7.566-7.566c-2.8992-2.8992-2.8992-7.566 0-10.4652l25.173-25.173c2.899-2.8991 7.566-2.8991 10.4651 0l3.3941 3.3941 3.9598-3.9598-3.394-3.3941c-5.0912-5.0912-13.2937-5.0912-18.3849 0L5.0337 57.43c-5.0911 5.0912-5.0911 13.2936 0 18.3848l7.6368 7.6367c5.0912 5.0912 13.2936 5.0912 18.3848 0l25.173-25.173c3.677-3.677 4.8083-9.1924 2.8284-14.1421-.2121-.495-.495-1.0607-.7778-1.6263l-4.3134 4.3133z"/>
            <path d="M41.8033 4.2556l-25.173 25.173c-4.2426 4.2426-4.9497 10.748-2.0506 15.7685l4.3133-4.3134c-.8485-2.5456-.212-5.4447 1.7678-7.4246l25.173-25.173c2.8991-2.8992 7.566-2.8992 10.4652 0l7.6367 7.6367c2.8992 2.8992 2.8992 7.566 0 10.4652l-25.173 25.173c-2.8991 2.8992-7.566 2.8992-10.4651 0l-3.3234-3.3234-4.0305 4.0305 3.3234 3.3234c5.0911 5.0912 13.2936 5.0912 18.3847 0l25.2437-25.2437c5.0912-5.0912 5.0912-13.2936 0-18.3848l-7.7074-7.7074c-5.0912-5.0912-13.3643-5.0205-18.3848 0z"/>
          </svg>
        </button>
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
