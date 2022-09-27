import { createStitches } from "@stitches/react";

const { createTheme } = createStitches({});

const darkTheme = createTheme({
  colors: {
    hiContrast: 'hsl(206,2%,93%)',
    loContrast: 'hsl(206,8%,8%)',

    gray100: 'hsl(206,8%,12%)',
    gray200: 'hsl(206,7%,14%)',
    gray300: 'hsl(206,7%,15%)',
    gray400: 'hsl(206,7%,24%)',
    gray500: 'hsl(206,7%,30%)',
    gray600: 'hsl(206,5%,53%)',
  },
  space: {},
  fonts: {},
});