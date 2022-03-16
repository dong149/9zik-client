import * as React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';
import { themedPalette } from '../../lib/styles/themes';
import optimizeImage from '../../lib/optimizeImage';
import { userThumbnail } from 'lib/static/images';

const HeaderUserIconBlock = styled.div`
  cursor: pointer;
  img {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
    border-radius: 50%;
    object-fit: cover;
    transition: 0.125s all ease-in;
  }
  svg {
    font-size: 1.5rem;
    margin-left: 0.25rem;
    color: ${themedPalette.text3};
    transition: 0.125s all ease-in;
    margin-right: -0.4375rem;
  }
  display: flex;
  align-items: center;
  &:hover {
    img {
      box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
    }
    svg {
      color: ${themedPalette.text1};
    }
  }
`;

export interface HeaderUserIconProps {
  thumbnail: string | null;
  onClick: any;
}

// TODO: show user thumbnail
const HeaderUserIcon: React.FC<HeaderUserIconProps> = ({ thumbnail, onClick }) => {
  return (
    <HeaderUserIconBlock onClick={onClick}>
      <img src={optimizeImage(thumbnail || userThumbnail, 120)} alt="thumbnail" />
      <MdArrowDropDown />
    </HeaderUserIconBlock>
  );
};

export default HeaderUserIcon;
