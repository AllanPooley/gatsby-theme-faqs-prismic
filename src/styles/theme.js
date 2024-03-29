export const theme = {
  space: [0, 4, 8, 16, 32],
  breakpoints: [
    '500px', '800px', '1080px',
  ],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: [14, 16, 20, 28, 36, 44, 64, 80],
  fontWeights: {
    body: 400,
    regular: 400,
    medium: 500,
    subheading: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  colors: {
    text: '#241E1E',
    background: '#FFFFFF',
    primary: '#965ADC',
    primaryDark: '#2D235F',
    primaryLight: '#E6D7FA',
    white: '#FFFFFF',
    offWhite: '#FCFAFF',
    black: '#241E1E',
    offBlack: '#241E1E',
    grey: '#F3F3F3',
    divider: '#F3F3F3',
    placeholderText: '#E6D7FA',
    controlText: 'white',
    controlTextActive: 'white',
    controlTextHover: 'white',
    controlBackground: '#965ADC',
    controlBackgroundHover: '#2D235F',
    controlBackgroundActive: '#2D235F',
    controlBorder: '#965ADC',
    controlBorderHover: '#2D235F',
    controlBorderActive: '#2D235F',
    promptText: 'text',
    answerText: 'text',
    answerBackground: 'transparent',
  },
  borderWidths: {
    controlBorderWidth: '1.5px',
  },
  radii: {
    controlBorderRadius: '32px',
  },
  sizes: {
    wrapper: '1240px',
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text',
    },
    label: {
      fontSize: [2, 2, 3, 3],
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text',
    },
    controls: {
      fontSize: [1, 1, 1, 1],
      fontFamily: 'heading',
      fontWeight: 'regular',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'answerText',
      backgroundColor: 'answerBackground',
    },
    h1: {
      variant: 'textStyles.heading',
      fontSize: [5, 6, 6, 7],
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: [3, 3, 4, 4],
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 0,
    },
    span: {
      variant: 'textStyles.label',
    },
  },
};

export default theme;
