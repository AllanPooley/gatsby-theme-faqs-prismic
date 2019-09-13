/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export const FaqHero = () => (
  <section
    className="faq-page-hero"
    sx={{
      backgroundColor: 'secondaryLight',
      overflow: 'hidden',
      padding: ['40px 5% 0 0', '40px 5% 0 0', '40px 10% 0', '80px 10% 0'],
    }}
  >
    <div
      className="container"
      sx={{
        maxWidth: '1240px',
        padding: ['0', '0', '0 20px', '0 20px'],
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        className="content-container"
        sx={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: [
            '100px 20px 120px',
            '100px 20px 140px',
            '140px 100px 60px',
            '140px 100px 40px',
          ],
          backgroundColor: 'offWhite',
          position: 'relative',
          'z-index': '3',
        }}
      >
        <Styled.h1
          className="page-title"
          sx={{
            color: 'secondaryDark',
            maxWidth: '500px',
            padding: '40px 0'
          }}
        >
          Frequently Asked Questions
        </Styled.h1>
      </div>
      <div
        className="outer-shadow"
        sx={{
          backgroundColor: 'secondary',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: [
            'translateX(-2vw) translateY(-5%)',
            'translateX(-2vw) translateY(-5%)',
            'translateX(-2vw) translateY(20%)',
            'translateX(-2vw) translateY(20%)',
          ],
          'z-index': '2',
        }}
      />
      <div
        className="outer-most-shadow"
        sx={{
          backgroundColor: 'secondaryDark',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: [
            'translateX(-5vw) translateY(-10%)',
            'translateX(-5vw) translateY(-10%)',
            'translateX(-5vw) translateY(40%)',
            'translateX(-5vw) translateY(40%)',
          ],
          'z-index': '1',
        }}
      />
    </div>
  </section>
);

export default FaqHero;
