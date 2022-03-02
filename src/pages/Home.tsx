import Header from 'components/base/Header';
import mockPostData from 'components/common/mock';
import PostCardGrid from 'components/common/PostCardGrid';
import HomeLayout from 'components/home/HomeLayout';
import MainResponsive from 'components/main/MainResponsive';
import { themedPalette } from 'lib/styles/themes';
import React from 'react';
import styled from 'styled-components';

export type HomeProps = Record<string, never>;

const mockPosts = mockPostData.data.trendingPosts;

function Home() {
  return (
    <Block>
      <Header />
      <MainResponsive>
        <HomeLayout main={<PostCardGrid posts={mockPosts || []} />} />
      </MainResponsive>
    </Block>
  );
}

const Block = styled.div`
  color: ${themedPalette.text1};
`;

export default Home;
