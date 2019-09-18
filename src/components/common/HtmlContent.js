/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import HtmlContentStyle from '../../styles/htmlContentStyle';

const HtmlContent = ({ content }) => (
  <>
    <div
      className="gatsby-theme-faqs-html-content"
      dangerouslySetInnerHTML={{ __html: content }}
      sx={{
        padding: [
          '20px 20px 30px',
          '30px 0 40px',
          '30px 0 40px',
          '30px 0 40px',
        ],
      }}
    />
    <HtmlContentStyle />
  </>
);

export default HtmlContent;
