import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DrawerNavigator from './routes/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
