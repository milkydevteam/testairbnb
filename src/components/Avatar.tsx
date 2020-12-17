import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import {ViewProps} from 'react-native';
import ShowImageBtn from '@/components/ShowImageBtn';
import ListFooter from './ListFooter';
const AvatarWrapper = styled.View<{size?: number}>`
  height: ${(p) => (p.size ? p.size : 48)}px;
  width: ${(p) => (p.size ? p.size : 48)}px;
  overflow: hidden;
  border-radius: ${(p) => (p.size ? p.size / 2 : 24)}px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: #fff;
`;

const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const LoadingImage = styled(ListFooter)`
  position: absolute;
  z-index: 1;
  elevation: 1;
`;

const AvatarBtn = memo(function ({
  url,
  size,
  disabled = false,
  ...props
}: {url?: string; size?: number; disabled?: boolean} & ViewProps) {
  const [loading, setLoading] = useState(true);

  return (
    <ShowImageBtn url={url} disabled={disabled || !url}>
      <AvatarWrapper size={size} {...props}>
        <AvatarImage
          source={{
            uri: url,
          }}
          onLoad={() => {
            setLoading(false);
          }}
        />
        <LoadingImage loading={loading} />
      </AvatarWrapper>
    </ShowImageBtn>
  );
});

export default AvatarBtn;
