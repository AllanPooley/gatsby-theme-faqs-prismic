/** @jsx jsx */
import { jsx } from 'theme-ui'
import { QuestionsListItem } from '.';
import { Wrapper } from '../common';

const QuestionsList = ({ questions }) => (
  <section
    className="faq-question-list"
    sx={{
      padding: '60px 0 140px',
      minHeight: '100vh'
    }}
  >
    <Wrapper>
      { questions && questions.length > 0 ? (
        questions.map((faq, index) => (
          <QuestionsListItem
            key={index}
            {...faq}
          />
        ))
      ) : (
        <span
          className="no-results-message"
          sx={{
            display: 'block',
            padding: '120px 20px',
            textAlign: 'center',
          }}
        >
          Sorry we couldn't find anything that meets that criteria
        </span>
      )}
    </Wrapper>
  </section>
);

export default QuestionsList;
