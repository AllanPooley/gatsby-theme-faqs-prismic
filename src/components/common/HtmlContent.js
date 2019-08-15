import React from 'react'
import HtmlContentStyle from '../../styles/htmlContentStyle'

const HtmlContent = ({ className, content }) => (
  <>
    <div
      className={`html-content ${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <HtmlContentStyle />
  </>
);

export default HtmlContent;
