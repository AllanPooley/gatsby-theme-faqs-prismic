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
        flexDirection: [
          'row',
          'row',
          'row',
          'row',
        ],
        alignItems: [
          'center',
          'center',
          'flex-start',
          'flex-start',
        ],
        justifyContent: [
          'space-between',
          'space-between',
          'space-between',
          'space-between',
        ],
        padding: [
          '0px 20px',
          '0',
          '0',
          '0',
        ],
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
