import React, { useState } from 'react';
import Collapse from 'react-css-collapse';
import {
  Wrapper,
  HtmlContent,
} from '../common';
import { generateKey } from '../../util/helpers';

const QuestionListItem = (props) => {
  const {
    question,
    answer,
    category,
  } = props;
  const categoryText = category.document[0].data.categoryName.text || null;
  const [questionExpanded, setQuestionExpanded] = useState(false);
  return (
    <div className={`faq-question ${questionExpanded ? 'expanded' : ''}`}>
      <div className="top-container">
        <h2 className="the-question">{question.text}</h2>
        { categoryText && (
          <span className="category">
            {categoryText}
          </span>
        )}
        <button
          type="button"
          className="toggle-button"
          onClick={event => setQuestionExpanded(!questionExpanded)}
          aria-label={`See answer to "${question.text}"`}
        >
          <div className={`icon ${questionExpanded ? 'toggled' : ''}`} />
        </button>
      </div>
      <div className="bottom-container">
        <Collapse isOpen={questionExpanded}>
          <HtmlContent content={answer.html} />
        </Collapse>
      </div>
    </div>
  );
};

const QuestionsList = ({ questions }) => (
  <section className="faq-question-list">
    <Wrapper>
      { questions && questions.length > 0 ? (
        questions.map((faq, index) => (
          <QuestionListItem
            key={generateKey(index)}
            {...faq}
          />
        ))
      ) : (
        <span className="no-results-message">
          Sorry we couldn't find anything that meets that criteria
        </span>
      )}
    </Wrapper>
  </section>
);

export default QuestionsList;
