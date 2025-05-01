import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { fetchContacts } from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <View style={styles.thumbnailContainer}>
        <ContactThumbnail
          avatar={avatar}
          onPress={() => navigation.navigate('Profile', { contact: item })}
        />
      </View>
    );
  };

  const favorites = contacts.filter(contact => contact.favorite);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text style={styles.errorText}>Error...</Text>}
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
    flex: 1,
    paddingHorizontal: 10, // Thêm padding ngang để nội dung không sát mép
    paddingTop: 10, // Thêm padding trên để tạo khoảng cách với header
  },
  list: {
    alignItems: 'center', // Căn giữa các thumbnail
  },
  thumbnailContainer: {
    margin: 10, // Thêm margin để tạo khoảng cách giữa các thumbnail
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Favorites;