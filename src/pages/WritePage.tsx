import Header from 'components/base/Header';
import WriteMarkdownEditor from 'components/write/WriteMarkdownEditor';
import React from 'react';
import styled from 'styled-components';

function WritePage() {
  return (
    <Block>
      <WriteMarkdownEditor initialBody="test" title="test" markdown="MARKDOWN" theme="light" />
    </Block>
  );
}

const Block = styled.div``;

export default WritePage;
