import { Dimensions } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const base = {
  width: 375,
  height: 667,
};

const { width, height } = Dimensions.get('window');
const ratioH = height / base.height;
const ratioW = width / base.width;

const horizontalScale = (size: number, factor = 1): number =>
  size + (ratioW * size - size) * factor;
const verticalScale = (size: number, factor = 1): number =>
  size + (ratioH * size - size) * factor;

export const HOME_NAV_HEIGHT = 44;
export const HOME_BANNER_HEIGHT = 250;
export const HEADER_HEIGHT = HOME_NAV_HEIGHT + getStatusBarHeight(true);
export const BOTTOM_SPACE = getBottomSpace() ? 15 : 0;

export {
  width as widthScreen,
  height as heightScreen,
  horizontalScale,
  verticalScale,
};
