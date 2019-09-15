/** @jsx jsx */
import { jsx } from 'theme-ui'

const Wrapper = (props) => {
  const { children } = props;
  return (
    <div
      className="wrapper"
      sx={{
        width: '100%',
        maxWidth: '1240px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: [
          '0px 20px',
          '0px 20px',
          '0px 20px',
          '0px 40px',
        ],
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
