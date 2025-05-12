import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { fetchContacts } from '../utility/api';
import ContactListItem from '../components/ContactListItem';
import {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} from '../Create store'; import { useDispatch, useSelector } from 'react-redux';

const keyExtractor = ({ phone }) => phone;

const Contacts = ({navigation}) =>  
    {
        // Khởi tạo state
        const {contacts,loading,error} = useSelector((state) =>state); 
        // const [contacts, setContacts] = useState([]);
        // const [loading, setLoading] = useState(false);
        // const [error, setError] = useState(false);
        const dispatch = useDispatch();
        //Load du lieu
        useEffect(() => {
            // Gửi action để thông báo đang loading
            dispatch(fetchContactsLoading());
          
            // Gọi API lấy danh sách contacts
            fetchContacts()
              .then((contacts) => {
                // Gửi action khi fetch thành công
                dispatch(fetchContactsSuccess(contacts));
              })
              .catch((e) => {
                // Gửi action khi fetch thất bại
                dispatch(fetchContactsError());
              });
          }, []);
          
    // Sắp xếp danh sách liên hệ
    const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
    const renderContact = ({item}) => {
        const { name, avatar, phone } = item; 
        return <ContactListItem
        name={name} avatar={avatar} phone={phone}
        onPress={() => navigation.navigate("Profile",{ contact: item })}
       // onPress={() => navigation.navigate("Profile")}
        />;
        };
    // Hiển thị danh sách liên hệ
    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
});

export default Contacts;
