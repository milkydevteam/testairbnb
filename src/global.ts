import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Dimensions, StatusBar, StatusBarProps, TextProps} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';

export {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

export {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

import {ModalProps} from 'react-native-modal';

export const ShadowView = styled.View`
  elevation: 2;
  shadow-offset: 3px 3px;
  shadow-color: grey;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;
export const ShadowButton = styled.TouchableOpacity`
  elevation: 2;
  shadow-offset: 1px 1px;
  shadow-color: grey;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

export const useBoolean: (
  initValue?: boolean,
) => [boolean, () => void, () => void] = (initValue = false) => {
  const [val, setVal] = useState(initValue);

  const setTrue = useCallback(() => {
    setVal(true);
  }, []);

  const setFalse = useCallback(() => {
    setVal(false);
  }, []);

  return [val, setTrue, setFalse];
};

export const scale = (size: number) => {
  return (Dimensions.get('window').width / 414) * size;
};
export const Wrapper = styled.View<{customStyle?: string}>`
  margin: 8px 0;
  padding: 16px;
  background-color: #fff;
  ${(p) => p.customStyle};
`;

export const LineBorder = styled.View<{customStyle?: string}>`
  width: 100%;
  height: 1px;
  background-color: ${(p) => p.theme.backgroundColor};
  margin: 12px 0;
  ${(p) => p.customStyle};
`;
const {width, height} = Dimensions.get('window');
export {width, height};

export const useStatusBarPushStackEntry = (stackEntry: StatusBarProps) => {
  useEffect(() => {
    // @ts-ignore
    const rs = StatusBar.pushStackEntry(stackEntry);
    return () => {
      // @ts-ignore
      StatusBar.popStackEntry(rs);
    };
  }, [stackEntry]);
};

export {default as bluebird} from 'bluebird';

export {default as _} from 'lodash';

export {default as SkeletonPlaceholder} from 'react-native-skeleton-placeholder/lib/SkeletonPlaceholder';

export const ColFlex1 = styled.View`
  flex: 1;
`;

export const useGetSetRef = <Type>(
  initialValue: Type,
): [MutableRefObject<Type>, Dispatch<SetStateAction<Type>>] => {
  const refVal = useRef<Type>(initialValue);

  const setRefVal: Dispatch<SetStateAction<Type>> = useCallback((value) => {
    if (typeof value === 'function') {
      // @ts-ignore
      refVal.current = value(refVal.current);
      return;
    }

    refVal.current = value;
  }, []);

  return [refVal, setRefVal];
};
export {default as createStateContext} from 'react-use/lib/createStateContext';
export interface ModalType {
  title?: string;
  content?: string;
  titleStyle?: any;
  modalProps?: ModalProps;
  activeButton?: {
    text?: string;
    onPress?: () => void;
  };
  disabledCloseBtn?: boolean;
  ignoreButton?: {
    text?: string;
    onPress?: () => void;
  };
}
global.appConfig = {
  allowTraining: true,
};
declare global {
  namespace NodeJS {
    interface Global {
      refreshHome: () => void;
      showPendingDiamond: () => void;
      showPopupJoinGroup: () => void;
      showPopupTraining: () => void;
      showPopupRequireDiamond: () => void;
      showModal: (content: ModalType, _callback?: () => void) => void;
      hideModal: () => void;
      showLoading: () => void;
      hideLoading: () => void;
      refreshVoucherOnGoing: () => void;
      refreshVoucherUpComing: () => void;
      navigateToVoucherTab?: (tab: number) => void;
      showNotification: (mess: any) => void;
      appConfig: {
        allowTraining: boolean;
      };
    }
  }
}
