import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Actions} from 'react-native-router-flux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';

const HomeWrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const NextToDetail = styled.Text`
  color: ${(p) => p.theme.blue};
  text-decoration: underline;
`;

const Home = memo(function Home() {
  const [top, setTop] = useState(0);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    setTimeout(() => {
      setTop(1);
    }, 200);
  }, []);
  return (
    <HomeWrapper>
      <NextToDetail onPress={() => Actions.push('detail')}>
        Next To Detail
      </NextToDetail>
    </HomeWrapper>
  );
});

export default Home;
