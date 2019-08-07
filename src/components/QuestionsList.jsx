import React from 'react';
import {
  Wrapper,
  HtmlContent,
} from '../common';
import { generateKey } from '../../util/helpers';
import './QuestionsList.scss';

const QuestionListItem = (props) => {
  const {
    question,
    answer,
    category,
  } = props;
  const categoryText = category.document[0].data.categoryName.text || null;
  return (
    <div className="faq-question">
      <div className="top-container">
        <h2 className="the-question">{question.text}</h2>
        { categoryText && (
          <span className="category">
            {categoryText}
          </span>
        )}
      </div>
      <div className="bottom-container">
        <HtmlContent content={answer.html} />
      </div>
    </div>
  );
};

const QuestionsList = ({ questions }) => (
  <section className="faq-question-list">
    <Wrapper>
      {questions && questions.map((faq, index) => (
        <QuestionListItem
          key={generateKey(index)}
          {...faq}
        />
      ))}
    </Wrapper>
  </section>
);

export default QuestionsList;
