import React, {memo} from 'react';
import {widthScreen, heightScreen} from '@/utils/Tranform';
import LoadingImage from '@/components/LoadingImage';

const ZoomImage = memo(function ({url}: {url: string}) {
  return (
    <LoadingImage
      source={{uri: url}}
      style={{
        width: widthScreen,
        height: heightScreen,
      }}
      resizeMode="contain"
      resizeMethod="resize"
    />
  );
});

export default ZoomImage;
