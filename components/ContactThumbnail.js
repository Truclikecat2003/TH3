// ContactThumbnail.js
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";
import colors from "../utils/colors";

const ContactThumbnail = ({
  name,
  phone,
  avatar,
  textColor,
  onPressAvatar,
}) => {
  const colorStyle = { color: textColor };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <TouchableOpacity
        style={styles.avatarWrapper}
        onPress={onPressAvatar}
        activeOpacity={onPressAvatar ? 0.7 : 1}
      >
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, { backgroundColor: textColor }]}>
            <Text style={styles.avatarText}>{name ? name[0] : '?'}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Name */}
      {name !== "" && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {/* Phone */}
      {phone !== "" && (
        <Text style={[styles.phone, colorStyle]}>
          {phone}
        </Text>
      )}
    </View>
  );
};

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  avatar: PropTypes.string,
  textColor: PropTypes.string,
  onPressAvatar: PropTypes.func,
};

ContactThumbnail.defaultProps = {
  name: "",
  phone: "",
  textColor: colors.darkPink,  // Màu chữ hợp với màu hồng phấn
  onPressAvatar: null,
};

export default ContactThumbnail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: colors.lightPink,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarWrapper: {
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.charcoal,
  },
  avatarText: {
    fontSize: 40,
    color: "#fff",
  },
  name: {
    fontSize: 20,  // Cỡ chữ tên giữ nguyên
    fontWeight: "700",
    marginBottom: 12,
  },
  phone: {
    fontSize: 14,  // Cỡ chữ của phone được giảm xuống
    marginVertical: 4,
    color: colors.charcoal,  // Màu chữ vừa dễ đọc, vừa phù hợp
  },
});
