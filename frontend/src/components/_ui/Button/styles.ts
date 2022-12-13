import { styled } from "@stitches/react";


const Button = styled('button', {
  // base styles

  '&::before': {
    content: `''`,
    display: 'block',
    backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: 'inherit',
    zIndex: -1,
  },
});

