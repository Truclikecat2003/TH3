import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Linking, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import colors from '../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../screens/actions';

const Profile = ({ route, navigation }) => { // Thêm navigation vào props
  const dispatch = useDispatch();

  // Lấy thông tin contact từ params và từ Redux store
  const routePhone = route?.params?.contact?.phone;
  const contact = useSelector((state) =>
    state.contacts.find((c) => c.phone === routePhone)
  );

  // Log kiểm tra contact khi load lại
  useEffect(() => {
    console.log('Contact Loaded:', contact);
  }, [contact]);

  const [isFavorite, setIsFavorite] = useState(contact?.favorite ?? false);

  useEffect(() => {
    // Lắng nghe khi contact thay đổi và cập nhật trạng thái favorite
    if (contact) {
      setIsFavorite(contact.favorite);
    }
  }, [contact]);

  // Xử lý bấm nút yêu thích
 const handleFavoritePress = () => {
  if (contact) {
    console.log('Toggling Favorite for:', contact.phone);
    dispatch(toggleFavorite(contact.phone));
    setIsFavorite((prev) => !prev); // Đảo ngược trạng thái yêu thích
  }
};


  const handleEmailPress = () => {
    if (contact?.email) {
      Linking.openURL(`mailto:${contact.email}`);
    }
  };

  const handlePhonePress = () => {
    if (contact?.phone) {
      Linking.openURL(`tel:${contact.phone}`);
    }
  };

  const handleCellPress = () => {
    if (contact?.cell) {
      Linking.openURL(`tel:${contact.cell}`);
    }
  };

  // Xử lý quay lại
  const handleBackPress = () => {
    navigation.goBack(); // Quay lại trang trước
  };

  if (!contact) {
    return null; // Hoặc có thể hiển thị một thông báo lỗi nếu cần
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        {/* Nút mũi tên quay lại */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="black" // Màu của mũi tên quay lại
          />
        </TouchableOpacity>

        {/* Nút trái tim yêu thích */}
        <TouchableOpacity style={styles.heartButton} onPress={handleFavoritePress}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={30}
            color="red" // Trái tim luôn màu đỏ
          />
        </TouchableOpacity>

        {/* Avatar, tên, số điện thoại */}
        <ContactThumbnail
          avatar={contact.avatar}
          name={contact.name}
          phone={contact.phone}
        />
      </View>

      {/* Danh sách chi tiết liên hệ */}
      <View style={styles.detailsSection}>
        <DetailListItem
          icon="mail"
          title="Email"
          subtitle={contact.email}
          onPress={handleEmailPress}
        />
        <DetailListItem
          icon="phone"
          title="Work"
          subtitle={contact.phone}
          onPress={handlePhonePress}
        />
        <DetailListItem
          icon="smartphone"
          title="Personal"
          subtitle={contact.cell}
          onPress={handleCellPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightPink,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heartButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default Profile;
