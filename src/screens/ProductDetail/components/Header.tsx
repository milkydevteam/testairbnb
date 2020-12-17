import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import styled from 'styled-components/native';
import {Row} from 'react-native-col';
import {MaterialIcons, bluebird, useStatusBarPushStackEntry} from '@/global';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Actions} from 'react-native-router-flux';
import ProductDetailContext from '../ProductDetailContext';
import ShareButton from '@/components/ShareButton';
import SimpleToast from 'react-native-simple-toast';
import {images} from './ProductImages';
import Icon from 'react-native-vector-icons/FontAwesome';

const Wrapper = styled(Row.LRB)<{show?: boolean}>`
  height: ${45 + getStatusBarHeight(true)}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  background: ${(p) => (p.show ? '#FFF' : 'transparent')};
`;

const ItemWrapper = styled.TouchableOpacity`
  margin: 0 5px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text<{isActive?: boolean}>`
  line-height: 19px;
  color: ${(props) => (props.isActive ? props.theme.primaryColor : '#989898')};
`;

const ItemActiveIndicator = styled.View<{isActive?: boolean}>`
  height: 3px;
  width: 36px;
  background-color: ${(props) =>
    props.isActive ? props.theme.primaryColor : 'transparent'};
  border-radius: 2px;
  position: absolute;
  bottom: -15px;
`;

const BackButton = styled(MaterialIcons)`
  width: 35px;
  height: 35px;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
`;

const Button = styled.TouchableOpacity<{customStyle?: string}>`
  width: 34px;
  height: 34px;

  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin: 7px;
  ${(p) => p.customStyle}
`;

const SShareButton = styled(ShareButton)`
  width: 34px;
  height: 34px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;

const Header = memo(function Header() {
  const {valueY: y} = useContext(ProductDetailContext);

  const downLoadDone = useCallback(async () => {
    await bluebird.delay(100);
    SimpleToast.show('Tải ảnh xuống thành công');
  }, []);
  useStatusBarPushStackEntry({barStyle: 'dark-content'});
  return (
    <Wrapper>
      <Button
        onPress={() => Actions.pop()}
        customStyle="background-color: rgba(0, 0, 0, 0.3);">
        <BackButton name="chevron-left" color="#FFF" />
      </Button>
      <Row>
        <SShareButton downloadOnly onDone={downLoadDone} images={images}>
          <Icon name="download" />
        </SShareButton>
      </Row>
    </Wrapper>
  );
});

export default Header;
