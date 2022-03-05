import RoundButton from 'components/common/RoundButton';
import MainResponsive from 'components/main/MainResponsive';
import media from 'lib/styles/media';
import { themedPalette } from 'lib/styles/themes';
import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';

function Header() {
  return (
    <Block>
      <Inner>
        <HeaderLogoBlock>
          <HeaderLogo>9zik</HeaderLogo>
        </HeaderLogoBlock>
        <Right>
          <ThemeToggleButton />
          <RoundButton color="darkGray">로그인</RoundButton>
        </Right>
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .write-button {
    ${media.medium} {
      display: none;
    }
  }
`;

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${themedPalette.text1};
  font-size: 1.3125rem;
  text-decoration: none;
  font-family: Fira Mono, monospace;
  ${media.medium} {
    font-size: 1.125rem;
  }
  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

const HeaderLogo = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Waterfall&display=swap');
  font-size: 2rem;
  font-family: 'Waterfall', cursive;
  font-weight: 700;
`;

export default Header;
