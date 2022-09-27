import { createStitches } from '@stitches/react';

const { styled } = createStitches({
    theme: {
      colors: {
        violet800: 'hsl(252 62% 54.9%)',
      },
    },
  });
  const Button = styled('button', {
    backgroundColor: '$violet800',
  });
  
    export default Button;