import React, { memo } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

const ButtonWrapper = styled.TouchableOpacity<{ highlight?: boolean }>`
  flex: 1;
  background-color: ${(p) =>
    p.highlight ? p.theme.primaryColor : p.theme.violet};
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.Text`
  font-size: 10px;
  color: #fff;
`;

export type ButtonProps = {
  text: string;
  highlight?: boolean;
  subTitle?: string;
} & TouchableOpacityProps;
const Button = memo(function Button({ text, subTitle, ...props }: ButtonProps) {
  return (
    <ButtonWrapper {...props}>
      <Title>{text.toUpperCase()}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </ButtonWrapper>
  );
});

export default Button;
