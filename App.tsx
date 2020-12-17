import React, {PureComponent, memo, useEffect, PropsWithChildren} from 'react';
import Routes from './src/routers';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import {ThemeProvider as SThemeProvider} from 'styled-components/native';
import theme from './src/Theme';

const _ThemeProvider = ({children}: PropsWithChildren<{}>) => {
  return <SThemeProvider theme={theme}>{children}</SThemeProvider>;
};

const ThemeProvider = memo(_ThemeProvider);
const AppHook = memo(function () {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <>
      <Routes />
    </>
  );
});
// @ts-nocheck
class App extends PureComponent {
  constructor(props: any) {
    super(props);
    // @ts-ignore
    this.state = {};
  }

  async componentDidMount() {
    // This listener handles the case where the app is woken up from the Universal or Deep Linking
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff', false);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <AppHook />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
