import Header from 'components/base/Header';
import mockPostData from 'components/common/mock';
import PostCardGrid from 'components/common/PostCardGrid';
import HomeLayout from 'components/home/HomeLayout';
import MainResponsive from 'components/main/MainResponsive';
import React from 'react';
import styled from 'styled-components';

const mockPosts = mockPostData.data.trendingPosts;

function HomePage() {
  return (
    <Block>
      <Header />
      <MainResponsive>
        <HomeLayout main={<PostCardGrid posts={mockPosts || []} />} />
      </MainResponsive>
    </Block>
  );
}

const Block = styled.div``;

export default HomePage;
