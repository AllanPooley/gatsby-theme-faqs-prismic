/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import {
  Wrapper,
} from '../common';

export const FaqHero = () => (
  <section
    className="faq-hero"
    sx={{
      backgroundColor: 'secondary',
      margin: '20px',
      padding: '80px 20px',
    }}
  >
    <div className="container">
      <Wrapper>
        <Styled.h1
          className="title"
          sx={{
            maxWidth: '800px',
            padding: '40px 0',
            color: 'background',
          }}
        >
          Frequently Asked Questions
        </Styled.h1>
      </Wrapper>
    </div>
  </section>
);

export default FaqHero;
