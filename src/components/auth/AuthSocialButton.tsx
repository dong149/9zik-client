import { GithubIcon, GoogleIcon } from 'lib/static/svg';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { themedPalette } from '../../lib/styles/themes';

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

  const host = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_HOST : 'http://localhost:5000/';

  const redirectTo = `${host}api/v2/auth/social/redirect/${provider}?next=${currentPath}`;

  return (
    <AuthSocialButtonBlock
      style={{
        background: color,
      }}
      border={border}
      tabIndex={tabIndex}
      href={redirectTo}
    >
      <Icon />
    </AuthSocialButtonBlock>
  );
};

export default AuthSocialButton;
