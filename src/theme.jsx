import { createTheme } from "@mantine/core";

const theme = createTheme({
  scale: 1.14285714,
  fontFamily: 'LXGW',
  black: '#303030',
  colors: {
    'main-color': [
      '#eaf7fd',
      '#e1e9ed',
      '#c5d0d5',
      '#a7b6bd',
      '#8da0a8',
      '#7c929c',
      '#728b97',
      '#5d7580',
      '#526b77',
      '#3f5d6a',
    ],
  },
  primaryShade: 7,
  primaryColor: 'main-color',
  lineHeights: 1,
  defaultRadius: '6px',
  headings: {
    fontWeight: 400
  }
})

export default theme;
