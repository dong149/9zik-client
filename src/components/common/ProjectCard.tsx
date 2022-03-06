import optimizeImage from 'lib/optimizeImage';
import { userThumbnail } from 'lib/static/images';
import { LikeIcon } from 'lib/static/svg';
import { mediaQuery } from 'lib/styles/media';
import { themedPalette } from 'lib/styles/themes';
import { ellipsis } from 'lib/styles/utils';
import { formatDate } from 'lib/utils';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ProjectModal from './ProjectModal';
import RatioImage from './RatioImage';

export type ProjectCardProps = {
  project: any;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const url = `http://localhost:3000/`;
  const user = {
    id: '3fd14aa8-0eaf-48fd-bf17-a0aa46d82e29',
    username: '류동훈',
    profile: {
      id: 'cdc9e58f-14d2-452c-a982-cd05f63919d9',
      thumbnail: 'https://images.velog.io/images/pingu944/profile/affb055f-66e0-400d-97d2-fad9e07beb91/img.jpg',
      __typename: 'UserProfile',
    },
    __typename: 'User',
  };
  const thumbnail =
    'https://images.velog.io/images/pingu944/post/53a978fb-9a0c-4df6-ad0c-b7c8a78b0787/위벅스 로그인-1.png';
  const userThumbnail =
    'https://images.velog.io/images/kms0206/profile/42755599-c1d6-47a6-8b74-88607179b135/1659C2BE-F0C9-4DBA-BBF6-DF73F570F2FA_1_105_c.jpeg';

  //   const prefetch = usePrefetchPost(post.user.username, post.url_slug);
  //   const prefetchTimeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  //   const onMouseEnter = () => {
  //     prefetchTimeoutId.current = setTimeout(prefetch, 2000);
  //   };

  //   const onMouseLeave = () => {
  //     if (prefetchTimeoutId.current) {
  //       clearTimeout(prefetchTimeoutId.current);
  //     }
  //   };

  return (
    <>
      <ProjectModal project={project} visible={modalVisible} onClose={() => setModalVisible(false)} />
      <Block onClick={() => setModalVisible(true)}>
        {thumbnail && <RatioImage widthRatio={1.916} heightRatio={1} src={optimizeImage(thumbnail, 640)} />}
        <Content clamp={!!thumbnail}>
          <h4>{project.title}</h4>
          <div className="description-wrapper">
            <p>
              {project.description.replace(/&#x3A;/g, ':')}
              {project.description.length === 150 && '...'}
            </p>
          </div>
          <div className="sub-info">
            <span>{formatDate(project.created_at)}</span>
            <span className="separator">·</span>
            <span>{project.like_count}개의 댓글</span>
          </div>
        </Content>
        <Footer>
          <div className="userinfo">
            <img src={optimizeImage(userThumbnail, 120)} alt={`user thumbnail of ${user.username}`} />
            <span>
              by <b>{user.username}</b>
            </span>
          </div>
          <div className="likes">
            <LikeIcon />
            {project.like_count}
          </div>
        </Footer>
      </Block>
    </>
  );
}

const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Block = styled.div`
  width: 20rem;
  background: ${themedPalette.bg_element1};
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    ${mediaQuery(1024)} {
      transform: none;
    }
  }
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${mediaQuery(1056)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;

const Content = styled.div<{ clamp: boolean; isSkeleton?: boolean }>`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    ${ellipsis}
    ${(props) =>
      props.isSkeleton &&
      css`
        text-overflow: initial;
      `}
    color: ${themedPalette.text1};
    ${mediaQuery(767)} {
      white-space: initial;
    }
  }
  .description-wrapper {
    flex: 1;
  }
  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    ${(props) =>
      props.clamp &&
      css`
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
    /* ${(props) =>
      !props.clamp &&
      css`
        height: 15.875rem;
      `} */
  
    color: ${themedPalette.text2};
    margin-bottom: 1.5rem;
  }
  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${themedPalette.text3};
    .separator {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;

const Footer = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid ${themedPalette.border4};
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
  .userinfo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
    }
    span {
      color: ${themedPalette.text3};
      b {
        color: ${themedPalette.text1};
      }
    }
  }
  .likes {
    display: flex;
    align-items: center;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
    }
  }
`;

export default React.memo(ProjectCard);
