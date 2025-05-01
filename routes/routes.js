import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import User from '../screens/User';
import Options from '../screens/Options';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarIcon = icon => ({ color }) => (
  <MaterialIcons name={icon} size={26} style={{ color }} />
);

const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact } = route.params || {};
          const { name } = contact || {};
          return {
            title: name ? name.split(' ')[0] : 'Profile',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

// const UserScreens = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName="User">
//       <Stack.Screen
//         name="User"
//         component={User}
//         options={{
//           headerTitle: "Me",
//           headerTintColor: 'white',
//           headerStyle: {
//             backgroundColor: colors.blue,
//           },
//           headerRight: () => (
//             <MaterialIcons
//               name="settings"
//               size={24}
//               style={{ color: 'white', marginRight: 10 }}
//               onPress={() => navigation.navigate('Options')}
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="Options"
//         component={Options}
//         options={{ title: "Options" }}
//       />
//     </Stack.Navigator>
//   );
// };

const UserScreens = () => {
  return (
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
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ title: "Options" }}
      />
    </Stack.Navigator>
  );
};


const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ContactsScreens"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.blue,
            height: 70, // Tăng chiều cao của thanh tab để có đủ không gian
            paddingBottom: 5,
          },
          tabBarActiveTintColor: colors.greyLight,
          tabBarInactiveTintColor: colors.greyDark,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            tabBarIcon: getTabBarIcon('list'),
            headerShown: false,
            tabBarLabel: 'Contacts',
          }}
        />
        <Tab.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            tabBarIcon: getTabBarIcon('star'),
            headerShown: false,
            tabBarLabel: 'Favorites',
          }}
        />
        <Tab.Screen
          name="UserScreens"
          component={UserScreens}
          options={{
            tabBarIcon: getTabBarIcon('person'),
            headerShown: false,
            tabBarLabel: 'User',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;