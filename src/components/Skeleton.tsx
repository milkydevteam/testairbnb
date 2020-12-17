import React, { memo } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScrollView, ScrollViewProps } from 'react-native';

const Skeleton = memo(function (props: ScrollViewProps) {
  return (
    <ScrollView {...props}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item height={200} marginTop={10} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item height={100} marginTop={10} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item height={250} marginTop={10} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item height={250} marginTop={10} />
      </SkeletonPlaceholder>
    </ScrollView>
  );
});

export default Skeleton;
