import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DrawerNavigator from './routes/routes';

const App = () => (
  <Provider store={store}>
    <DrawerNavigator />
  </Provider>
);

export default App;
