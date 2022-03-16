import { GithubIcon, GoogleIcon } from 'lib/static/svg';
import * as React from 'react';
import userService from 'services/user.service';
import styled, { css } from 'styled-components';
import { themedPalette } from '../../lib/styles/themes';

const API_BASE_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_HOST : 'http://localhost:8080';

const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

const GITHUB_AUTH_URL = `${API_BASE_URL}/oauth2/authorization/github?redirect_uri=${OAUTH2_REDIRECT_URI}`;

const AuthSocialButtonBlock = styled.a<{ border: boolean }>`
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: 0.125s all ease-in;
  color: white;
  ${(props) =>
    props.border &&
    css`
      border: 1px solid ${themedPalette.border3};
    `}
  &:focus {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.35);
  }
`;

interface AuthSocialButtonProps {
  provider: 'google' | 'github';
  tabIndex?: number;
  currentPath: string;
}

const providerMap = {
  github: {
    color: '#272e33',
    icon: GithubIcon,
    border: false,
  },
  google: {
    color: 'white',
    icon: GoogleIcon,
    border: true,
  },
};

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ provider, tabIndex, currentPath }) => {
  const info = providerMap[provider];
  const { icon: Icon, color, border } = info;

  console.log(currentPath);

  const onLogin = () => {
    console.log('onLogin');
    userService
      .login()
      .then((response: any) => {
        console.log(response);
      })
      .catch((e: React.ErrorInfo) => {
        console.log(e);
      });
  };

  return (
    <AuthSocialButtonBlock
      style={{
        background: color,
      }}
      border={border}
      tabIndex={tabIndex}
      onClick={onLogin}
      href={GITHUB_AUTH_URL}
      //   href={redirectTo}
    >
      <Icon />
    </AuthSocialButtonBlock>
  );
};

export default AuthSocialButton;
