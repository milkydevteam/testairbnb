import React, {memo, useCallback, useContext} from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {IconWrapper, IconText, Wrapper, Icon} from './style';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(p) => p.theme.primaryColor};
  border-radius: 4px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const TextBtn = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Col = styled.View``;

const Text = styled.Text`
  font-size: 18px;
`;

const Money = styled.Text`
  font-weight: bold;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ReviewText = styled.Text`
  font-size: 16px;
  margin-left: 4px;
  color: #717171;
  text-decoration: underline;
`;

const BottomBar = memo(function BottomBar() {
  return (
    <Wrapper>
      <Col>
        <Text>
          <Money>$27</Money> / night
        </Text>
        <Row>
          <MaterialIcons name="star" size={16} color="red" />
          <ReviewText>
            <Money>4.91</Money> (263)
          </ReviewText>
        </Row>
      </Col>
      <Button>
        <TextBtn>Check Availability</TextBtn>
      </Button>
    </Wrapper>
  );
});

export default BottomBar;
