import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import {ImageProps} from 'react-native';
import FastImage from 'react-native-fast-image';

const ImageBackground = styled(FastImage).attrs({
  resizeMethod: 'resize',
  resizeMode: 'contain',
})``;

const ActiviIndicator = styled.ActivityIndicator.attrs((p) => ({
  color: p.theme.primaryColor,
}))`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const LoadingImage = memo(function ({
  children,
  ...props
}: {children?: any} & ImageProps) {
  const [loading, setLoading] = useState(true);
  return (
    <ImageBackground {...props} onLoadEnd={() => setLoading(false)}>
      {loading && <ActiviIndicator />}
      {children}
    </ImageBackground>
  );
});

export default LoadingImage;
