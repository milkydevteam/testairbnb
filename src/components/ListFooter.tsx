import React, { memo } from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';

const Footer = styled.View`
  padding: 12px;
  align-items: center;
  width: 100%;
`;
const ActivityIndicator = styled.ActivityIndicator.attrs((p) => ({
  color: p.theme.primaryColor,
}))``;

const ListFooter = memo(function ({
  loading,
  ...props
}: { loading: boolean } & ViewProps) {
  if (!loading) return null;
  return (
    <Footer {...props}>
      <ActivityIndicator />
    </Footer>
  );
});
export default ListFooter;
