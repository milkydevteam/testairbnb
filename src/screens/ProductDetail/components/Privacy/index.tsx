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
import AvatarBtn from '@/components/Avatar';
const Wrapper = styled.View`
  padding-top: 32px;
  margin: 0 22px;
  padding-bottom: 24px;
  border-bottom-width: 2px;
  border-color: #e5e5e5;
`;

const NameRow = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 5px 0;
`;

const NameCol = styled.View`
  flex: 1;
`;

const HostBy = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Entire = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #363636;
`;

const DetailSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.Text`
  padding: 0 8px;
  font-size: 20px;
  line-height: 15px;
  font-weight: bold;
`;

const Description = styled.Text`
  color: #717171;
  font-size: 15px;
  line-height: 21px;
  margin-top: 2px;
`;

const IconWrapper = styled.View`
  width: 36px;
`;

const Item = memo(
  ({
    title,
    description,
    more,
    icon,
  }: {
    title: string;
    description: string;
    more?: any;
    icon?: any;
  }) => {
    return (
      <NameRow>
        <IconWrapper>
          <Icon name={icon || 'home'} size={28} />
        </IconWrapper>
        <NameCol>
          <Entire>{title}</Entire>
          <Description>
            {description} {more}
          </Description>
        </NameCol>
      </NameRow>
    );
  },
);

const Privacy = memo(function () {
  return (
    <Wrapper>
      <Item
        title="Entire house"
        description="You'll have the house to yourself"
      />
      <Item
        title="Enchanced Clean"
        icon="history"
        description="This host committed to Airbnb's 5-step enhanced cleaning process."
      />
      <Item
        title="Barbara is a Superhost"
        description="Superhosts are experienced, highly rated hots who are committed to providing great stays for guests"
      />
      <Item
        icon="ban"
        title="Add your trip dates to get the cancellation detais for this stay."
        description="Add your trip dates to get the cancellation details for this stay."
      />
      <Item
        title="House rules"
        description="This place isn't suitable for children (2-12yrs) and the host doesn't allow pets, parties, or smoking"
        icon="window-close"
      />
    </Wrapper>
  );
});

export default Privacy;
