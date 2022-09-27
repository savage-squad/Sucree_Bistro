import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
    utils: {
      // Abbreviated margin properties
      m: (value) => ({
        margin: value,
      }),
      mt: (value) => ({
        marginTop: value,
      }),
      mr: (value) => ({
        marginRight: value,
      }),
      mb: (value) => ({
        marginBottom: value,
      }),
      ml: (value) => ({
        marginLeft: value,
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
  
      // A property for applying width/height together
      size: (value) => ({
        width: value,
        height: value,
      }),
  
      // A property to apply linear gradient
      linearGradient: (value) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
  
      // An abbreviated property for border-radius
      br: (value) => ({
        borderRadius: value,
      }),
    },
  });