import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, persistor} from './app/store';
import {StatusBar} from 'react-native';
import Routes from './app/navigation/Routes';
import FlashMessage from "react-native-flash-message";
import {colorCode} from './app/design/colorCode'

const App = () => {
 return (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar barStyle="light-content" backgroundColor={colorCode.black} />
      <Routes/>
      <FlashMessage position="bottom" />
    </PersistGate>
  </Provider>
);
};

export default App;