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
import Modal from 'react-native-modal';
import DynamicHeader from '@/components/DynamicHeader';

const Wrapper = styled.View`
  padding-top: 32px;
  margin: 0 22px;
  padding-bottom: 24px;
  border-bottom-width: 2px;
  border-color: #e5e5e5;
`;

const Text = styled.Text`
  font-size: 17px;
  color: #666;
  line-height: 24px;
`;

const More = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  text-decoration: underline;
  padding-top: 8px;
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

const ModalContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 36,
    paddingLeft: 16,
    paddingRight: 16,
  },
})`
  flex: 1;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #363636;
`;

const Section = styled.View`
  margin-top: 24px;
`;

const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;

  color: #363636;
`;

const Description = memo(function () {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <Text>
        This beautiful .4 acre property is located in the heart of Branson- near
        the shops, theatres, restaurants, all the best of Branson, yet in a
        quiet neighborhood across from a park and under a canopy of Black Walnut
        trees. This apartment is on the first floor of a two-story home...
      </Text>
      <More onPress={() => setShow(true)}>
        Show More <Icon name="chevron-right" />
      </More>
      <SModal isVisible={show}>
        <ModalWrapper>
          <DynamicHeader
            leftIcon="chevron-left"
            headerStyle="white"
            onBackPress={() => setShow(false)}
          />
          <ModalContainer>
            <Title>About this space</Title>
            <Section>
              <Text>
                This beautiful .4 acre property is located in the heart of
                Branson- near the shops, theatres, restaurants, all the best of
                Branson, yet in a quiet neighborhood across from a park and
                under a canopy of Black Walnut trees. This apartment is on the
                first floor of a two-story home.
              </Text>
            </Section>
            <Section>
              <SubTitle>The space</SubTitle>
              <Text>
                This is a large studio space with a sleeping area, living area
                and kitchen area. There is a separate bathroom, closet and
                laundry area with dish washing sink. Washer and Dryer are
                available along with refrigerator, microwave, toaster oven and
                Keurig.
              </Text>
            </Section>
            <Section>
              <SubTitle>Guest access</SubTitle>
              <Text>
                There is a nice little patio on the back of the house as well as
                a firepit, horsheshoe pit and yard.
              </Text>
            </Section>
            <Section>
              <SubTitle>Other things to note</SubTitle>
              <Text>No additional overnight guest without approval</Text>
            </Section>
          </ModalContainer>
        </ModalWrapper>
      </SModal>
    </Wrapper>
  );
});

export default Description;
