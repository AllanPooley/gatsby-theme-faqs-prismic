/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Component } from 'react'
import queryString from 'query-string'
import { QuestionsListItem } from '.';
import { Wrapper } from '../common';
import { scrollToPageElement } from '../../util/helpers'

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
          padding: '60px 0 140px',
          minHeight: '100vh'
        }}
      >
        <Wrapper>
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
                  padding: '120px 20px',
                  textAlign: 'center',
                }}
              >
                Sorry we couldn't find anything that meets that criteria
              </span>
            )}
          </div>
        </Wrapper>
      </section>
    );
  }
}

export default QuestionsList;
