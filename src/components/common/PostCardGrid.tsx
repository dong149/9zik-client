import { mediaQuery } from 'lib/styles/media';
import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

export type PostCardGridProps = {
  posts: any[];
};

function PostCardGrid({ posts }: PostCardGridProps) {
  return (
    <Block>
      {posts.map((post) => {
        return <PostCard post={post} />;
      })}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
  }
`;

export default PostCardGrid;
