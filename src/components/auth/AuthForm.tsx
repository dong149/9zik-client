import * as React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../lib/styles/themes';
import media from '../../lib/styles/media';
import { useLocation } from 'react-router';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

const AuthFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  .upper-wrapper {
    padding-top: 3rem;
    ${media.small} {
      margin-top: 2rem;
    }
  }
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: ${themedPalette.text1};
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${themedPalette.text3};
  }
  section + section {
    margin-top: 2.5rem;
  }
  .foot {
    ${media.small} {
      margin-top: 2rem;
    }

    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    .link {
      display: inline-block;
      font-weight: bold;
      color: ${themedPalette.primary1};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const AuthForm = () => {
  const location = useLocation();
  return (
    <AuthFormBlock>
      <div className="upper-wrapper">
        <h2 data-testid="title">로그인</h2>
        <section>
          <h4>소셜 계정으로 로그인</h4>
          <AuthSocialButtonGroup currentPath={`${location.pathname}${location.search}`} />
        </section>
      </div>
      <div className="foot">
        <span>9zik이 무슨 서비스인지 궁금하신가요?</span>
        <div className="link" tabIndex={7}>
          알아보기
        </div>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
