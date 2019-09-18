/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Component } from 'react';
import queryString from 'query-string';
import { QuestionsListItem } from '.';
import { scrollToPageElement } from '../../util/helpers';

class QuestionsList extends Component {
  componentDidMount() {
    const {
      location,
    } = this.props;
    const queryParams = queryString.parse(location.search);
    const anchoredQuestionId = queryParams.question;
    if (anchoredQuestionId) scrollToPageElement(null, anchoredQuestionId);
  }

  render() {
    const {
      questions,
      location,
    } = this.props;
    return (
      <section
        className="faq-question-list"
        sx={{
          padding: '20px 0 140px',
          minHeight: '100vh',
        }}
      >
        <div
          className="funky-wrapper"
          sx={{
            width: '100%',
            maxWidth: 'wrapper',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: [
              '0',
              '0px 20px',
              '0px 20px',
              '0px 40px',
            ],
          }}
        >
          <div
            className="questions"
            sx={{
              overflow: 'show',
            }}
          >
            { questions && questions.length > 0 ? (
              questions.map((faq, index) => (
                <QuestionsListItem
                  key={index}
                  {...faq}
                  location={location}
                />
              ))
            ) : (
              <span
                className="no-results-message"
                sx={{
                  display: 'block',
                  padding: [
                    '60px 20px',
                    '120px 20px',
                    '120px 20px',
                    '120px 20px',
                  ],
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  color: 'text',
                  fontSize: [3, 3, 4, 4],
                  textAlign: 'center',
                }}
              >
                Sorry we couldn't find anything that meets that criteria
              </span>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionsList;
