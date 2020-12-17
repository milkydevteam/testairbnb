import React, {memo, useEffect, useRef, useCallback, useState} from 'react';
import {StatusBar, FlatList} from 'react-native';
import styled from 'styled-components/native';
import ZoomImage from './ZoomImage';
import ShareButton from '@/components/ShareButton';
import SimpleToast from 'react-native-simple-toast';
import {widthScreen} from '@/utils/Tranform';
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 40px;
  border-radius: 30px;
  margin-right: 8px;
`;

const style = {
  flatList: {
    flex: 1,
  },
};

const Wrapper = styled.View`
  flex: 1;
  background: ${(p) => p.theme.primaryDark};
`;

const HeaderWrapper = styled.View`
  position: absolute;
  z-index: 1;
  elevation: 1;
  top: 0;
`;

const renderItem = ({item}: {item: any}) => <ZoomImage url={item} />;

const keyExtractor = (item: any, index: number) => index.toString();

const ShowImage = memo(function ({data, index}: any) {
  const listRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(index);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToIndex({index});
    }
    StatusBar.setHidden(true, 'fade');
    return () => StatusBar.setHidden(false, 'fade');
  }, [index]);
  const onDone = useCallback(() => {
    SimpleToast.show('Đã tải ảnh thành công');
  }, []);
  return (
    <Wrapper>
      <HeaderWrapper>
        <View>
          <ShareButton
            downloadOnly
            images={[data[currentIndex]]}
            onDone={onDone}>
            <Icon name="heart" />
          </ShareButton>
        </View>
      </HeaderWrapper>
      <FlatList
        ref={listRef}
        style={style.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        initialScrollIndex={index}
        onMomentumScrollEnd={({
          nativeEvent: {
            contentOffset: {x},
          },
        }) => {
          const tabIndex = Math.floor(x / (widthScreen - 1));
          if (tabIndex !== currentIndex) {
            setCurrentIndex(tabIndex);
          }
        }}
        onScrollToIndexFailed={() => {
          setTimeout(() => {
            if (listRef.current) {
              listRef.current.scrollToIndex({index});
            }
          }, 20);
        }}
      />
    </Wrapper>
  );
});

export default ShowImage;
