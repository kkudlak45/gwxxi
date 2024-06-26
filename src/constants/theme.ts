import { createTheme } from '@mui/material'

export const GREEN = '#687659'
export const BLUE = '#396B92'
export const CHARCOAL = '#2C2A29'
export const RED = '#7F3E42'
export const YELLOW = '#BB8346'

export const theme = createTheme({
  typography: {
    fontFamily: 'Kollektif',
    allVariants: {
      color: CHARCOAL,
    },
    h1: {
      textAlign: 'center',
      fontFamily: 'San Andreas',
      color: GREEN,
      textTransform: 'uppercase',
    },
    h2: {
      textAlign: 'center',
      fontFamily: 'San Andreas',
      color: BLUE,
      textTransform: 'uppercase',
    },
    h3: {
      textAlign: 'center',
      fontFamily: 'KGRedHands',
      color: GREEN,
      textTransform: 'uppercase',
    },
    h4: {
      textAlign: 'center',
      fontFamily: 'KGRedHands',
      color: BLUE,
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: BLUE,
    },
    secondary: {
      main: GREEN,
    },
    text: {
      primary: '#ffffff',
    },
    error: {
      main: RED,
    },
    warning: {
      main: YELLOW,
    },
  },
})
