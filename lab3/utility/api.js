import 'react-native-get-random-values';
import { v4 } from 'uuid';
// Hàm chuyển đổi thông tin một liên hệ từ API thành đối tượng theo định dạng mong muốn
const mapContact = contact => {
    const {
      name, picture, phone, cell, email,
    } = contact;
  
    return {
      id: v4(), // Tạo ID ngẫu nhiên cho liên hệ
      name: name.first + " " + name.last, // Gộp tên và họ thành tên đầy đủ
      avatar: picture.large, // Ảnh đại diện kích thước lớn
      phone, // Số điện thoại nhà
      cell, // Số điện thoại di động
      email, // Email
      favorite: Math.random() >= 0.5, // Ngẫu nhiên đánh dấu là liên hệ yêu thích hoặc không
    };
  };
  
  // Lấy danh sách 100 liên hệ từ API và chuyển đổi thành định dạng ứng dụng sử dụng
  const fetchContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const contactData = await response.json();
    return contactData.results.map(mapContact);
  };
  
  // Lấy một liên hệ đại diện người dùng (user) từ API
  const fetchUserContact = async () => {
    const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
    const userData = await response.json();
    return mapContact(userData.results[0]);
  };
  
  // Lấy một liên hệ ngẫu nhiên từ API
  const fetchRandomContact = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const userData = await response.json();
    return mapContact(userData.results[0]);
  };
  
  export { fetchContacts, fetchUserContact, fetchRandomContact };
  