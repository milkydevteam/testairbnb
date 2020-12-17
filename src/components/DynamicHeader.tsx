import React, {memo, ReactElement, useEffect} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Row} from 'react-native-col';
import {StatusBar, ViewProps} from 'react-native';
import {MaterialIcons, useStatusBarPushStackEntry} from '@/global';
import {Actions} from 'react-native-router-flux';
import {HOME_NAV_HEIGHT} from '@/utils/Tranform';
import HeaderWrapper from './HeaderWrapper';

export const HEIGHT = getStatusBarHeight(true) + HOME_NAV_HEIGHT;

const Wrapper = styled(HeaderWrapper)<{
  background?: string;
  headerStyle?: 'white' | 'default';
}>`
  background-color: ${(p) => p.background || p.theme.primaryColor};
  ${(p) =>
    p.headerStyle === 'white'
      ? `border-bottom-width: 1px; border-bottom-color: ${p.theme.backgroundColor}`
      : ``}
`;

const NavBar = styled(Row.LR)`
  width: 100%;
  height: ${HOME_NAV_HEIGHT}px;
`;

const Title = styled.Text<{headerStyle: 'default' | 'white'}>`
  color: ${(p) => (p.headerStyle !== 'white' ? '#fff' : '#363636')};
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

const BackIcon = styled(MaterialIcons)`
  font-size: 28px;
  width: 100%;
  text-align: center;
`;

const BackWrapper = styled.TouchableOpacity`
  width: 37px;
  margin: 0 5px;
  justify-content: center;
  height: 50px;
`;

const IconPlaceholder = styled.View`
  width: 37px;
  height: 45px;
  margin: 0 5px;
`;
const RightWrapper = styled.View`
  height: 100%;
  min-width: 50px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  width: 100%;
`;
const SubHeader = styled.Text<{headerStyle: 'default' | 'white'}>`
  color: ${(p) => (p.headerStyle !== 'white' ? '#fff' : '#363636')};
  font-size: 12px;
  margin-top: -10px;
  height: 24px;
  text-align: center;
`;

const Footer = styled.View`
  width: 100%;
`;

const DynamicBackButton = memo(function DynamicBackButton({
  onPress,
  icon,
  headerStyle,
  disableBack,
}: {
  onPress?: () => void;
  icon?: string;
  headerStyle: 'default' | 'white';
  disableBack?: boolean;
}) {
  return (
    <BackWrapper
      activeOpacity={1}
      onPress={() => {
        if (disableBack) return;
        if (onPress) {
          onPress();
        } else {
          Actions.pop();
        }
      }}>
      {!disableBack && (
        <BackIcon
          name={icon || 'chevron-left'}
          color={headerStyle !== 'white' ? '#FFF' : '#363636'}
        />
      )}
    </BackWrapper>
  );
});

export type DynamicHeaderProps = {
  title?: string;
  centerElement?: ReactElement;
  rightElement?: ReactElement;
  onBackPress?: () => void;
  background?: string;
  leftElement?: ReactElement;
  leftIcon?: string;
  subTitle?: string;
  headerStyle?: 'default' | 'white';
  disableBackBtn?: boolean;
  backgroundElement?: any;
  FooterElement?: any;
  MoreHeader?: any;
} & ViewProps;
const DynamicHeader = memo(function DynamicHeader({
  title,
  centerElement,
  rightElement,
  onBackPress,
  background,
  leftElement,
  leftIcon,
  subTitle,
  headerStyle,
  disableBackBtn,
  backgroundElement,
  FooterElement,
  MoreHeader,
  ...props
}: DynamicHeaderProps) {
  if (headerStyle === 'white' && !background) {
    background = '#FFF';
  }
  if (!headerStyle) headerStyle = 'default';
  useStatusBarPushStackEntry({
    barStyle: headerStyle === 'white' ? 'dark-content' : 'light-content',
  });

  useEffect(() => {
    StatusBar.setTranslucent(true);
    if (background) {
      StatusBar.setBackgroundColor(background);
    }
    return () => {
      StatusBar.setBackgroundColor('transparent');
    };
  }, [background]);

  return (
    <>
      <Wrapper background={background} headerStyle={headerStyle} {...props}>
        {backgroundElement}
        <Container>
          <NavBar>
            {leftElement || (
              <DynamicBackButton
                headerStyle={headerStyle}
                onPress={onBackPress}
                icon={leftIcon}
                disableBack={disableBackBtn}
              />
            )}
            {centerElement ? (
              centerElement
            ) : (
              <Title headerStyle={headerStyle}>{title?.toUpperCase()}</Title>
            )}

            {rightElement ? (
              <RightWrapper>{rightElement}</RightWrapper>
            ) : (
              <IconPlaceholder />
            )}
          </NavBar>
          {subTitle ? (
            <SubHeader headerStyle={headerStyle}>{subTitle}</SubHeader>
          ) : null}
          {FooterElement && <Footer>{FooterElement}</Footer>}
        </Container>
      </Wrapper>
      {MoreHeader}
    </>
  );
});

export default DynamicHeader;
