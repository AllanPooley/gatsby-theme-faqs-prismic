/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  CopyLinkIcon,
} from '.';

const CopyLinkButton = (props) => {
  const {
    question,
    questionId,
    showCopyNotification,
    copyAnchorLink,
  } = props;
  return (
    <div
      className="copy-link-button"
      sx={{
        display: [
          'none',
          'none',
          'block',
          'block',
        ],
        position: 'relative',
      }}
    >
      <button
        type="button"
        className="anchor-link"
        onClick={(event) => copyAnchorLink(event, questionId)}
        aria-label={`Copy a link to question: "${question.text}"`}
        sx={{
          height: '30px',
          width: '20px',
          marginRight: '20px',
          marginTop: ['2.5px', '5px', '5px', '5px'],
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <CopyLinkIcon />
      </button>
      <div
        className="text-copied-notification"
        sx={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: showCopyNotification ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%) translateY(-80%)',
          height: 'auto',
          padding: '5px 10px',
          textAlign: 'center',
          opacity: showCopyNotification ? '1' : '0',
          visibility: showCopyNotification ? 'visible' : 'hidden',
          backgroundColor: 'black',
          borderRadius: '4px',
          transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease',
          zIndex: '1',
        }}
      >
        <span
          sx={{
            color: 'white',
            lineHeight: '1',
            whiteSpace: 'nowrap',
          }}
        >
          Copied
        </span>
        <div
          className="tooltip-triangle"
          sx={{
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '-6px',
            margin: '0 auto',
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid black',
          }}
        />
      </div>
    </div>
  );
};

export default CopyLinkButton;
