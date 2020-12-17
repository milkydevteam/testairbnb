import React, {
  createContext,
  createRef,
  Dispatch,
  memo,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from 'react';
import {ScrollView, Animated} from 'react-native';

export const ProductDetailContext = createContext<{
  valueY: number;
  mainScrollViewRef: MutableRefObject<ScrollView | null>;

  setValueY: Dispatch<SetStateAction<number>>;
  scrollY: Animated.Value;
}>({
  scrollY: new Animated.Value(0),
  mainScrollViewRef: createRef(),

  valueY: 0,
  setValueY: () => null,
});

export const ProductDetailProvider = memo(({children}: {children: any}) => {
  const aniScroll = useRef(new Animated.Value(0));

  const mainScrollViewRef = useRef<ScrollView>(null);
  const [valueY, setValueY] = useState(0);
  useEffect(() => {
    const scrollY = aniScroll.current;
    const listenerId = scrollY.addListener(({value}: {value: any}) => {
      setValueY(value);
    });
    return () => {
      scrollY.removeListener(listenerId);
    };
  }, []);
  return (
    <ProductDetailContext.Provider
      value={{
        mainScrollViewRef,
        valueY,
        setValueY,
        scrollY: aniScroll.current,
      }}>
      {children}
    </ProductDetailContext.Provider>
  );
});

export default ProductDetailContext;
