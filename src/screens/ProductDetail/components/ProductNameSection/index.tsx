import React, {
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
  useRef,
} from 'react';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
const Wrapper = styled.View`
  background-color: #fff;
  padding-top: 32px;
  margin: 0 24px;
  padding-bottom: 24px;
  border-bottom-width: 2px;
  border-color: #e5e5e5;
`;

const NameRow = styled.View`
  width: 100%;
`;

const NameCol = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

const ReviewSection = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ReviewText = styled.Text`
  font-size: 12px;
  margin-left: 4px;
  color: #717171;
`;

const Dot = styled.Text`
  padding: 0 8px;
  font-size: 20px;
  line-height: 15px;
  font-weight: bold;
`;

const Address = styled.Text`
  color: #363636;
  text-decoration: underline;
`;

const ProductNameSection = memo(function ProductNameSection() {
  return (
    <Wrapper>
      <NameRow>
        <NameCol>
          <Name>P"m"P/No.5: Rooftop secret house * city central</Name>
        </NameCol>
      </NameRow>
      <ReviewSection>
        <Row>
          <MaterialIcons name="star" size={16} color="red" />
          <ReviewText>4.91 (263)</ReviewText>
        </Row>
        <Row>
          <Dot>.</Dot>
        </Row>
        <Row>
          <Icon name="bell" color="red" />
          <ReviewText>Superhost</ReviewText>
        </Row>
      </ReviewSection>
      <Address>Nguyễn Cư Trinh, Hồ Chi Minh, Vietnam</Address>
    </Wrapper>
  );
});

export default ProductNameSection;
