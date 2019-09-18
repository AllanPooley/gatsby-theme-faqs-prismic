/** @jsx jsx */
import { jsx } from 'theme-ui';

const iconWidth = 20;
const iconWidthMobile = 15;
const iconLineWidth = 2;
const iconLineWidthMobile = 2;

const RevealButton = (props) => {
  const {
    questionExpanded,
  } = props;
  return (
    <div
      className="icon"
      sx={{
        display: 'block',
        padding: '7.5px',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: 'controlBorder',
        borderRadius: '50%',
        margin: [
          '0 0 0 20px',
          '2.5px 0 0 15px',
          '2.5px 0 0 15px',
          '2.5px 0 0 15px',
        ],
      }}
    >
      <div
        className="icon-container"
        sx={{
          boxSizing: 'border-box',
          transition: 'transform 0.3s',
          width: [
            `${iconWidthMobile}px`,
            `${iconWidth}px`,
            `${iconWidth}px`,
            `${iconWidth}px`,
          ],
          height: [
            `${iconWidthMobile}px`,
            `${iconWidth}px`,
            `${iconWidth}px`,
            `${iconWidth}px`,
          ],
          transform: questionExpanded ? 'rotate(90deg)' : 'rotate(180deg)',
          position: 'relative',
        }}
      >
        <div
          className="stroke-horizontal"
          sx={{
            display: 'block',
            width: questionExpanded ? '0px' : [
              `${iconWidthMobile}px`,
              `${iconWidth}px`,
              `${iconWidth}px`,
              `${iconWidth}px`,
            ],
            height: '0px',
            borderBottomStyle: 'solid',
            borderBottomWidth: [
              `${iconLineWidthMobile}px`,
              `${iconLineWidth}px`,
              `${iconLineWidth}px`,
              `${iconLineWidth}px`,
            ],
            borderColor: 'controlBorder',
            position: 'absolute',
            bottom: [
              `${parseFloat(iconWidthMobile / 2) - parseFloat(iconLineWidthMobile / 2)}px`,
              `${parseFloat(iconWidth / 2) - parseFloat(iconLineWidth / 2)}px`,
              `${parseFloat(iconWidth / 2) - parseFloat(iconLineWidth / 2)}px`,
              `${parseFloat(iconWidth / 2) - parseFloat(iconLineWidth / 2)}px`,
            ],
          }}
        />
        <div
          className="stroke-vertical"
          sx={{
            content: '""',
            display: 'block',
            width: [
              `${iconWidthMobile}px`,
              `${iconWidth}px`,
              `${iconWidth}px`,
              `${iconWidth}px`,
            ],
            height: '0px',
            borderBottomStyle: 'solid',
            borderBottomWidth: [
              `${iconLineWidthMobile}px`,
              `${iconLineWidth}px`,
              `${iconLineWidth}px`,
              `${iconLineWidth}px`,
            ],
            borderColor: 'controlBorder',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
            transition: 'width 0.3s',
            position: 'absolute',
            bottom: [
              `${parseFloat(iconWidthMobile / 2) - parseFloat(iconLineWidthMobile / 2)}px`,
              `${parseFloat(iconWidth / 2) - parseFloat(iconLineWidth / 2)}px`,
              `${parseFloat(iconWidth / 2) - parseFloat(iconLineWidth / 2)}px`,
              `${parseFloat(iconWidth / 2) - parseFloat(iconLineWidth / 2)}px`,
            ],
          }}
        />
      </div>
    </div>
  );
};

export default RevealButton;
