import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import ContactThumbnail from '../components/ContactThumbnail';

const Favorites = ({ navigation }) => {
  const { contacts, loading, error } = useSelector((state) => state);

  const favorites = contacts.filter((c) => c.favorite);

  const keyExtractor = ({ phone }) => phone;

  const renderItem = ({ item }) => (
    <ContactThumbnail
      avatar={item.avatar}
      onPress={() => navigation.navigate('Profile', { contact: item })}
    />
  );

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          numColumns={3}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  list: {
    alignItems: 'center',
  },
});

export default Favorites;
