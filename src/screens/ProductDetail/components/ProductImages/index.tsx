import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components/native';
import {ViewProps, Animated, StatusBar} from 'react-native';
import ProductDetailContext from '@/screens/ProductDetail/ProductDetailContext';
import ViewPager from '@react-native-community/viewpager';
import {Actions} from 'react-native-router-flux';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LoadingImage from '@/components/LoadingImage';
import {widthScreen} from '@/utils/Tranform';
import {useStatusBarPushStackEntry} from '@/global';

const Wrapper = styled.View`
  margin-top: ${-(45 + getStatusBarHeight(true))}px;
`;

const Scrollable = styled(ViewPager)`
  height: 250px;
`;

const ImageButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Image = styled(LoadingImage)`
  background-color: #f4f4f4;
  height: 100%;
`;

const PagerWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  right: 15px;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Text = styled.Text`
  font-size: 12px;
  color: #fff;
`;

const PagerIndicator = memo(function ({
  total,
  currentPage,
}: {
  total: number;
  currentPage: number;
}) {
  return (
    <PagerWrapper>
      <Text>
        {currentPage + 1}/{total}
      </Text>
    </PagerWrapper>
  );
});

const Item = memo(function Item({
  image,
  onPress,
}: {
  image: string;
  onPress: () => void;
}) {
  const {scrollY} = useContext(ProductDetailContext);

  return (
    <ImageButton onPress={onPress}>
      <Animated.View
        style={{
          width: scrollY.interpolate({
            inputRange: [-1, 0, 150],
            outputRange: ['102%', '100%', '96%'],
          }),
          height: scrollY.interpolate({
            inputRange: [-1, 0, 150],
            outputRange: ['102%', '100%', '96%'],
          }),
        }}>
        <Image source={{uri: image}} />
      </Animated.View>
    </ImageButton>
  );
});

export const images = [
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/5-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/6-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/7-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/8-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/9-Vgreen-Bia-gung-vang-khong-do-330ml.png',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/10-Vgreen-Bia-gung-vang-khong-do-330ml.png',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/1-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/2-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/3-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/4-Vgreen-Bia-gung-vang-khong-do-330ml.jpg',
  'https://cdn.pinggo.vn/adflex-pinggo-statics-file/product/5876/bia-gung-vang-1.jpg',
];

const ProductImages = memo(function ProductImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollList = useRef<ViewPager | null>(null);

  const onPageSelected = useCallback(({nativeEvent: {position}}) => {
    setCurrentIndex(position);
  }, []);

  useEffect(() => {
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <Wrapper>
      <Scrollable ref={scrollList} onPageSelected={onPageSelected}>
        {images.map((image: any, index: number) => (
          <Item
            key={index.toString()}
            image={image}
            onPress={() => Actions.show_image({data: images, index})}
          />
        ))}
      </Scrollable>
      <PagerIndicator currentPage={currentIndex} total={images.length} />
    </Wrapper>
  );
});

export default ProductImages;
