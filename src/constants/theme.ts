import { createTheme } from '@mui/material'

export const BLUE = '#37769d'
export const WHITE = '#EBF5F7'
export const GREEN = '#496865'
export const BROWN = '#B1856C'
export const CHARCOAL = '#474c59'
export const RED = '#a44344'
export const BLACK = '#091a24'
export const SILVER = '#c4c4c4'
export const BRONZE = '#8d7244'
export const YELLOW = '#d5af34'

export const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    allVariants: {
      color: CHARCOAL,
    },
    h1: {
      textAlign: 'center',
      fontFamily: 'TradeGothic',
      color: GREEN,
      textTransform: 'none',
    },
    h2: {
      textAlign: 'center',
      fontFamily: 'TradeGothic',
      color: BLUE,
      textTransform: 'none',
    },
    h3: {
      textAlign: 'center',
      fontFamily: 'TradeGothic',
      color: BLUE,
      textTransform: 'none',
    },
    h4: {
      textAlign: 'center',
      fontFamily: 'TradeGothic',
      color: BLUE,
      textTransform: 'none',
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
