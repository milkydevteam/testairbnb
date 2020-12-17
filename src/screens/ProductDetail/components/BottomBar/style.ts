import styled from 'styled-components/native';
import {Row} from 'react-native-col';
import {ShadowView} from '@/global';
import {BOTTOM_SPACE} from '@/utils/Tranform';

const HEIGHT = 50;

const Wrapper = styled(ShadowView)`
  background-color: #fff;
  box-shadow: 0 -5px 11px #00000010;
  padding: 16px 24px;
  flex-direction: row;
`;

const ButtonsWrapper = styled(Row)`
  border-radius: 8px;
  flex: 1;
  height: 42px;
  overflow: hidden;
`;

const IconWrapper = styled.View`
  padding: 0 3px;
  height: 100%;
  align-items: center;
  margin-left: 7px;
`;

const Icon = styled.View`
  height: 20px;
  justify-content: center;
`;

const IconText = styled.Text`
  font-size: 10px;
  color: #363636;
  margin-top: 2px;
`;

export {Wrapper, ButtonsWrapper, IconWrapper, IconText, Icon};
