import React, {memo, useEffect, useCallback} from 'react';
import {TouchableOpacityProps} from 'react-native';
import Share from 'react-native-share';
import styled from 'styled-components/native';
import Theme from '@/Theme';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import Spinner from 'react-native-loading-spinner-overlay';
import {downloadToBase64} from '@/utils/ImageFunction';

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ShareButton = memo(function ({
  children,
  images,
  message,
  title,
  url,
  onDone,
  downloadOnly,
  ...props
}: {
  children: any;
  images?: string[];
  message?: string;
  title?: string;
  url?: string;
  onDone?: (app?: string) => void;
  downloadOnly?: boolean;
} & TouchableOpacityProps) {
  if (!message) {
    message = '';
  }
  if (!title) {
    title = '';
  }
  if (!url) {
    url = '';
  }
  const [{loading, value}, downloadImage] = useAsyncFn(async () => {
    if (!images) return [];
    return downloadToBase64(images);
  }, [images]);
  const startShare = useCallback(() => {
    const options: any = {
      message: title + '\n' + message,
      urls: value,
      title: 'Chia sẻ Test đến ứng dụng khác',
      subject: title,
    };
    if (url) {
      options.url = url;
    }
    Share.open(options).then((result: any) => {
      if (onDone) onDone(result.app);
    });
  }, [message, onDone, title, url, value]);

  const onPress = useCallback(() => {
    if (images) {
      downloadImage();
      return;
    }
    try {
      startShare();
    } catch (error) {
      console.log('start share', error);
    }
  }, [downloadImage, images, startShare]);

  useEffect(() => {
    if (value) {
      if (downloadOnly) {
        if (onDone) onDone();
        return;
      }
      try {
        startShare();
      } catch (error) {
        console.log('start share', error);
      }
    }
  }, [downloadOnly, onDone, startShare, value]);
  if (loading) {
    return <Spinner visible={true} color={Theme.primaryColor} />;
  }
  return (
    <Button onPress={onPress} {...props}>
      {children}
    </Button>
  );
});

export default ShareButton;
