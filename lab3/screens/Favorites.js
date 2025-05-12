import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { fetchContacts } from '../utility/api';
import ContactThumbnail from '../components/ContactThumbnail';

// Action creators
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from '../actions';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts) => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch((e) => {
        dispatch(fetchContactsError());
      });
  }, [dispatch]);

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  const favorites = contacts.filter((contact) => contact.favorite);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
});

export default Favorites;
