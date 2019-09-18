/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import queryString from 'query-string';
import {
  CopyLinkButton,
  RevealButton,
  QuestionContent,
} from '.';
import {
  toKebabCase,
  copyToClipboard,
} from '../../util/helpers';

const QuestionsListItem = (props) => {
  const {
    question,
    answer,
    location,
  } = props;
  const questionId = toKebabCase(question.text);
  const queryParams = queryString.parse(location.search);
  const anchoredQuestionId = queryParams.question;
  const [questionExpanded, setQuestionExpanded] = useState(questionId === anchoredQuestionId);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const copyAnchorLink = (event, id) => {
    event.preventDefault();
    if (!showCopyNotification) {
      const {
        origin,
        pathname,
      } = location;
      const anchorUrl = `${origin}${pathname}?question=${id}`;
      copyToClipboard(anchorUrl);
      setShowCopyNotification(true);
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 1500);
    }
  };
  return (
    <div
      id={questionId}
      className={`faq-question ${questionExpanded ? 'expanded' : ''}`}
      sx={{
        paddingTop: [
          '40px',
          '40px',
          '60px',
          '60px',
        ],
        transition: 'margin 0.3s ease',
      }}
    >
      <div
        className="top-container"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          borderBottom: '1.5px solid primary',
          position: 'relative',
        }}
      >
        <CopyLinkButton
          question={question}
          questionId={questionId}
          showCopyNotification={showCopyNotification}
          copyAnchorLink={copyAnchorLink}
        />
        <RevealButton
          question={question}
          questionExpanded={questionExpanded}
          setQuestionExpanded={setQuestionExpanded}
        />
      </div>
      <QuestionContent
        questionExpanded={questionExpanded}
        answer={answer}
      />
    </div>
  );
};

export default QuestionsListItem;
