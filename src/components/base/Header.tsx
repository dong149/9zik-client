import AuthModal from 'components/auth/AuthModal';
import RoundButton from 'components/common/RoundButton';
import MainResponsive from 'components/main/MainResponsive';
import media from 'lib/styles/media';
import { themedPalette } from 'lib/styles/themes';
import React, { ErrorInfo, useCallback, useEffect, useRef, useState } from 'react';
import tokenService from 'services/token.service';
import userService from 'services/user.service';
import styled from 'styled-components';
import HeaderUserIcon from './HeaderUserIcon';
import HeaderUserMenu from './HeaderUserMenu';
import useToggle from './hooks/useToggle';
import ThemeToggleButton from './ThemeToggleButton';

const DEFAULT_USER = {
  picture: null,
  name: null,
};

function Header() {
  const ref = useRef<HTMLDivElement>(null);
  const [userMenu, toggleUserMenu] = useToggle(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(DEFAULT_USER);

  useEffect(() => {
    userService
      .getUser()
      .then((res) => {
        setUser(res && res.data);
      })
      .catch((e: ErrorInfo) => {
        console.log(e);
      });
  }, []);

  const onOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as any)) return;
      toggleUserMenu();
    },
    [toggleUserMenu],
  );

  const onLogout = () => {
    userService
      .logout()
      .then(() => {
        setUser(DEFAULT_USER);
        tokenService.removeUser();
      })
      .catch((e: ErrorInfo) => {
        console.log(e);
      });
  };

  return (
    <>
      <AuthModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <Block>
        <Inner>
          <HeaderLogoBlock>
            <HeaderLogo>9zik</HeaderLogo>
          </HeaderLogoBlock>
          {user.name ? (
            <Right>
              <ThemeToggleButton />
              <div ref={ref}>
                <HeaderUserIcon thumbnail={user.picture} onClick={toggleUserMenu} />
              </div>
              <HeaderUserMenu onClose={onOutsideClick} onLogout={onLogout} username={user.name} visible={userMenu} />
            </Right>
          ) : (
            <Right>
              <ThemeToggleButton />
              <RoundButton onClick={() => setModalVisible(true)} color="darkGray">
                로그인
              </RoundButton>
            </Right>
          )}
        </Inner>
      </Block>
    </>
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
