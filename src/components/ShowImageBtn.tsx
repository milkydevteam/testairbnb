import React, { memo, useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

const ShowImageBtn = memo(function ({
  url,
  children,
  disabled,
  index,
  urls,
}: {
  url?: string;
  children: any;
  disabled?: any;
  urls?: { url: string }[];
  index?: number;
}) {
  const nextToShowScreen = useCallback(() => {
    Actions.show_image({ data: urls || [{ url }], index: index || 0 });
  }, [url, urls, index]);
  return (
    <TouchableWithoutFeedback onPress={nextToShowScreen} disabled={disabled}>
      {children}
    </TouchableWithoutFeedback>
  );
});

export default ShowImageBtn;
