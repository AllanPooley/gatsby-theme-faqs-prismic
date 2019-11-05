/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const FaqHero = ({ title }) => (
  <section
    className="faq-page-hero"
    sx={{
      backgroundColor: 'primaryDark',
      overflow: 'hidden',
      padding: [
        '25% 5% 0 0',
        '80px 5% 0 0',
        '80px 10% 0',
        '80px 10% 0',
      ],
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
            '80px 40px',
            '100px 20px 140px',
            '140px 100px 80px',
            '140px 100px 80px',
          ],
          backgroundColor: 'offWhite',
          position: 'relative',
          'z-index': '3',
        }}
      >
        <Styled.h1
          className="page-title"
          sx={{
            color: 'black',
            maxWidth: '500px',
            marginBottom: '40px',
          }}
        >
          {title}
        </Styled.h1>
      </div>
      <div
        className="outer-shadow"
        sx={{
          backgroundColor: 'primaryLight',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: [
            'translateX(-7.5vw) translateY(-10%)',
            'translateX(-2.5vw) translateY(-5%)',
            'translateX(-2.5vw) translateY(20%)',
            'translateX(-2.5vw) translateY(20%)',
          ],
          'z-index': '2',
        }}
      />
      <div
        className="outer-most-shadow"
        sx={{
          backgroundColor: 'primary',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: [
            'translateX(-15vw) translateY(-20%)',
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
