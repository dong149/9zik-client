import Header from 'components/base/Header';
import { themedPalette } from 'lib/styles/themes';
import React from 'react';
import styled from 'styled-components';

export type HomeProps = Record<string, never>;

function Home() {
  return (
    <Block>
      <Header />
    </Block>
  );
}

const Block = styled.div`
  color: ${themedPalette.text1};
`;

export default Home;
