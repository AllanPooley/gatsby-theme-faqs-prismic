import React from 'react';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <div className="wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
