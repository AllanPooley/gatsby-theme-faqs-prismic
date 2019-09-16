/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { RevealIcon } from '.';

const RevealButton = (props) => {
  const {
    question,
    questionExpanded,
    setQuestionExpanded,
  } = props;
  return (
    <button
      type="button"
      className="toggle-button"
      onClick={() => setQuestionExpanded(!questionExpanded)}
      aria-label={`See answer to "${question.text}"`}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '0',
        '&:hover': {
          cursor: 'pointer',
        },
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
      <RevealIcon
        questionExpanded={questionExpanded}
      />
    </button>
  );
};

export default RevealButton;
