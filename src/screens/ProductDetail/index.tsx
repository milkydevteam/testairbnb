import React, {
  memo,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components/native';
import {ScrollViewProps, RefreshControl, Animated, Alert} from 'react-native';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import BottomBar from './components/BottomBar';
import ProductDetailContext, {
  ProductDetailProvider,
} from './ProductDetailContext';
import bluebird from 'bluebird';
import {Actions} from 'react-native-router-flux';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import Skeleton from '@/components/Skeleton';
import ProductNameSection from './components/ProductNameSection';
import Host from './components/Host';
import Privacy from './components/Privacy';
import Description from './components/Description';
import Services from './components/Service';
import Location from './Location';

const ScrollView = styled.ScrollView`
  background-color: #fff;
  flex: 1;
`;

const MainScrollView = ({
  children,
  ...props
}: PropsWithChildren<ScrollViewProps>) => {
  const {mainScrollViewRef, setValueY, scrollY} = useContext(
    ProductDetailContext,
  );

  return (
    <ScrollView
      // @ts-ignore
      ref={mainScrollViewRef}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={150}
      {...props}>
      {children}
    </ScrollView>
  );
};

const ProductDetail = memo(function () {
  const [{loading, error}, refresh] = useAsyncFn(async () => {
    await bluebird.delay(200);
  }, []);

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    refresh();
  }, []);

  if (loading) {
    return (
      <Skeleton
        refreshControl={
          <RefreshControl onRefresh={refresh} refreshing={loading} />
        }
      />
    );
  }
  return (
    <ProductDetailProvider>
      <MainScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <Header />
        <ProductImages />
        <ProductNameSection />
        <Host />
        <Privacy />
        <Description />
        <Services />
        <Location />
      </MainScrollView>
      <BottomBar />
    </ProductDetailProvider>
  );
});

export default ProductDetail;
