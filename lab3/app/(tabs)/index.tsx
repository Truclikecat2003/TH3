import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { fetchContacts, fetchUserContact, fetchRandomContact } from '../../utility/api';
import Contacts from '../../screens/Contacts';
import Profile from '../../screens/Profile';
import Favorites from '../../screens/Favorites';
import User from '../../screens/User';
import Options from '../../screens/Options';
import DrawerNavigator from '../../routes';
import Store from '../../Create store';


const App = () => {
  return (
    <Provider store={Store}>
      <View style={{ flex: 1 }}>
        <DrawerNavigator />
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Ionicons name="timer-outline" size={24} color="gray" />
            <ThemedText>Recent</ThemedText>
          </View>
          <View style={styles.footerItem}>
            <Ionicons name="heart-outline" size={24} color="gray" />
            <ThemedText>Favorites</ThemedText>
          </View>
          <View style={styles.footerItem}>
            <Ionicons name="location-outline" size={24} color="gray" />
            <ThemedText>Nearby</ThemedText>
          </View>
        </View>
      </View>
    </Provider>
    
  );
};
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerItem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
});

export default App;

