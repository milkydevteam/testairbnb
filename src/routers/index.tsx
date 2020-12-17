import React, {memo, useCallback, useEffect} from 'react';
import {Actions, Lightbox, Router, Scene} from 'react-native-router-flux';

import ProductDetail from '../screens/ProductDetail';
import ShowImage from '../screens/ShowImage';
import Home from '../screens/Home';

let currentScreen = '';

const Routes = memo(() => {
  return (
    <Router>
      <Lightbox>
        <Scene key={'root'} path="root">
          <Scene key="home" component={Home} hideNavBar={true} initial />
          <Scene key="show_image" hideNavBar component={ShowImage} />
          <Scene key="detail" component={ProductDetail} hideNavBar={true} />
        </Scene>
      </Lightbox>
    </Router>
  );
});

export default Routes;
