import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import User from '../screens/User';
import Options from '../screens/Options';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Tạo icon cho Drawer Menu
const getDrawerItemIcon = icon => ({ color }) => (
  <MaterialIcons name={icon} size={22} style={{ color }} />
);

// Stack Navigator cho Contacts
const ContactsScreens = () => (
  <Stack.Navigator
    initialRouteName="Contacts"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Contacts" component={Contacts}/>
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

// Stack Navigator cho Favorites
const FavoritesScreens = () => (
  <Stack.Navigator
    initialRouteName="Favorites"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

// Stack Navigator cho User
// const UserScreens = () => (
//   <Stack.Navigator
//     initialRouteName="User"
//     screenOptions={{ headerShown: false }}
//   >
//     <Stack.Screen name="User" component={User} />
//     <Stack.Screen name="Options" component={Options} />
//   </Stack.Navigator>
// );

const UserScreens = () => (
  <Stack.Navigator initialRouteName="User">
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        headerTitle: "Me",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            style={{ color: 'white', marginRight: 10 }}
            onPress={() => navigation.navigate('Options')}
          />
        ),
      })}
    />
    <Stack.Screen name="Options" component={Options} options={{ title: "Options" }} />
  </Stack.Navigator>
);


// Drawer chính
const DrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="ContactsScreens"
      screenOptions={{
        drawerActiveTintColor: colors.blue,
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          title: 'Contacts',
          drawerIcon: getDrawerItemIcon('list'),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{
          title: 'Favorites',
          drawerIcon: getDrawerItemIcon('star'),
        }}
      />
      <Drawer.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          title: 'User',
          drawerIcon: getDrawerItemIcon('person'),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default DrawerNavigator;
