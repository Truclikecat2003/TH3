import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from '../store';
import { fetchContacts } from '../utils/api';

const Contacts = ({ navigation }) => {
  const { contacts, loading, error } = useSelector((state) => state);

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((data) => dispatch(fetchContactsSuccess(data)))
      .catch(() => dispatch(fetchContactsError()));
  }, []);

  const keyExtractor = ({ phone }) => phone;

  const renderItem = ({ item }) => (
    <ContactListItem
      name={item.name}
      phone={item.phone}
      avatar={item.avatar}
      // onPress={() => navigation.navigate('Profile', { contact: item })}
      //onPress={() => item && navigation.navigate('Profile', { contact: item })}
      //onPress={() => item && navigation.navigate('Profile', { contact: item })}
      onPress={() => item && navigation.navigate('Profile', { contact: item })}



    />
  );

  const contactsSorted = contacts.slice().sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Contacts;
