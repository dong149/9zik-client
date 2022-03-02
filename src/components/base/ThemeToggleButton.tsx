import { MoonIcon, SunIcon } from 'lib/static/svg';
import { themedPalette } from 'lib/styles/themes';
import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

function ThemeToggleButton() {
  const [theme, setTheme] = useState('light');

  const isDark = theme === 'dark';
  const transitions = useTransition(isDark, {
    initial: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    from: {
      transform: 'scale(0) rotate(-180deg)',
      opacity: 0,
    },
    enter: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    leave: {
      transform: 'scale(0) rotate(180deg)',
      opacity: 0,
    },

    reverse: true,
  });

  return (
    <IconButton
      onClick={() => {
        if (theme === 'light') {
          setTheme('dark');
          document.body.dataset.theme = 'dark';
        } else {
          setTheme('light');
          document.body.dataset.theme = 'light';
        }
      }}
    >
      {transitions((style, item) =>
        item ? (
          <Positioner>
            <AnimatedSVGWrapper style={style}>
              <MoonIcon />
            </AnimatedSVGWrapper>
          </Positioner>
        ) : (
          <Positioner>
            <AnimatedSVGWrapper style={style}>
              <SunIcon />
            </AnimatedSVGWrapper>
          </Positioner>
        ),
      )}
    </IconButton>
  );
}

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.25rem;
  color: white;
  position: relative;
  &:hover {
    background: ${themedPalette.slight_layer};
  }
`;

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
  color: ${themedPalette.text1};
  svg {
    display: block;
  }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);

export default ThemeToggleButton;
