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
  margin: 0 24px;
  padding-bottom: 24px;
  border-bottom-width: 2px;
  border-color: #e5e5e5;
`;

const NameRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

const NameCol = styled.View`
  flex: 1;
`;

const HostBy = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Entire = styled.Text`
  font-size: 20px;
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

const TextDetail = styled.Text``;

const Host = memo(function () {
  return (
    <Wrapper>
      <NameRow>
        <NameCol>
          <Entire>Entire house</Entire>
          <HostBy>hosted by Rianna</HostBy>
        </NameCol>
        <AvatarBtn
          size={60}
          url={`https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-1/p200x200/76751481_2585736798200024_6249272050989400064_o.jpg?_nc_cat=107&ccb=2&_nc_sid=7206a8&_nc_ohc=UNLwCxmUmOgAX9m44hl&_nc_ht=scontent.fhan2-5.fna&tp=6&oh=2060fa1bcabe0e3218c634eba2c44fdf&oe=5FFEFECA`}
        />
      </NameRow>
      <NameCol>
        <DetailSection>
          <TextDetail>8 guests</TextDetail>
          <Dot>.</Dot>
          <TextDetail>2 bedrooms</TextDetail>
          <Dot>.</Dot>

          <TextDetail>5 beds</TextDetail>
          <Dot>.</Dot>

          <TextDetail>3 bathrooms</TextDetail>
        </DetailSection>
      </NameCol>
    </Wrapper>
  );
});

export default Host;
