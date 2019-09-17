import React from 'react';
import HtmlContentStyle from '../../styles/htmlContentStyle';

const HtmlContent = ({ content }) => (
  <>
    <div
      className="gatsby-theme-faqs-html-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <HtmlContentStyle />
  </>
);

export default HtmlContent;
