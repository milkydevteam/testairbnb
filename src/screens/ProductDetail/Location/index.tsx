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
import Modal from 'react-native-modal';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import DynamicHeader from '@/components/DynamicHeader';
const Wrapper = styled.View`
  padding-top: 32px;
  margin: 0 22px;
  padding-bottom: 24px;
  border-bottom-width: 2px;
  border-color: #e5e5e5;
`;

// @ts-ignore
const SModal = (styled(Modal)`
  justify-content: flex-end;
  margin: 0;
` as unknown) as typeof Modal;

const ModalWrapper = styled.View`
  width: 100%;
  background-color: #fff;
  height: 100%;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #363636;
`;

const Section = styled.View`
  margin-top: 24px;
  height: 300px;
`;

const Row = styled.View`
  padding: 8px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ServiceName = styled.Text<{disabled?: boolean}>`
  font-size: 20px;

  ${(p) =>
    p.disabled
      ? `
    text-decoration: line-through;
    color: #ccc;
  `
      : ''}
`;

const BtnShowMap = styled.TouchableOpacity`
  z-index: 11;
  height: 100%;
  top: 0;
  width: 100%;
`;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

const ModalContainer = styled.View`
  flex: 1;
`;

const Location = memo(function () {
  const [show, setShow] = useState(false);
  const [region, setRegion] = useState({
    latitude: 21.017521341909024,
    longitude: 105.78208599070716,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <Wrapper>
      <Title>Location</Title>
      <Section>
        <MapView
          initialRegion={region}
          showsMyLocationButton
          showsUserLocation
          style={styles.mapView}
        />
        <BtnShowMap onPress={() => setShow(true)} />
      </Section>

      <SModal isVisible={show}>
        <ModalWrapper>
          <DynamicHeader
            onBackPress={() => setShow(false)}
            headerStyle="white"
          />
          <ModalContainer>
            <MapView
              initialRegion={region}
              showsMyLocationButton
              showsUserLocation
              style={styles.mapView}
            />
          </ModalContainer>
        </ModalWrapper>
      </SModal>
    </Wrapper>
  );
});

export default Location;
