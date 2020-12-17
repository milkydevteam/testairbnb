declare module 'react-native-loading-spinner-overlay' {
  import { ComponentType, ReactElement } from 'react';
  import { TextStyle, ViewStyle } from 'react-native';
  export type Spinner = ComponentType<{
    cancelable?: boolean;
    color?: string;
    animation?: 'none' | 'slide' | 'fade';
    overlayColor?: string;
    size?: 'small' | 'normal' | 'large';
    textContent?: string;
    textStyle?: TextStyle;
    visible?: boolean;
    indicatorStyle?: ViewStyle;
    customIndicator?: ReactElement;
    children?: ReactElement;
  }>;
  const Spinner: Spinner;

  export default Spinner;
}
