import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TabNavigator from './routes/routes';

const App = () => {
  return (
    <PaperProvider>
      <TabNavigator />
    </PaperProvider>
  );
};

export default App;