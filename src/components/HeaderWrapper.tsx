import React, {memo} from 'react';
import styled from 'styled-components/native';
import {ViewProps} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Theme from '@/Theme';
import LinearGradient from 'react-native-linear-gradient';

const NavBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Background = styled(LinearGradient).attrs({
  colors: [Theme.violet, Theme.primaryColor],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const HeaderWrapper = memo(function Header({
  children,
  background,
  ...props
}: {
  children: any;
  background?: any;
} & ViewProps) {
  return (
    <NavBar {...props}>
      {!background && <Background />}
      {children}
    </NavBar>
  );
});

export default HeaderWrapper;
