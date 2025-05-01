import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
    const colorStyle = {
        color: textColor,
    };
    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                {avatar ? (
                <Image
                    source={{
                    uri: avatar,
                    }}
                    style={styles.avatar}
                />
                ) : (
                <Icon name="person" size={40} color={textColor} style={styles.avatar} />
                )}
            </ImageComponent>
            {name !== "" && (
                <Text style={[styles.name, colorStyle]}>{name}</Text>
            )}
            {phone !== "" && (
                <Text style={[styles.phone, colorStyle]}>{phone}</Text>
            )}
        </View>
    );
};

export default ContactThumbnail;

ContactThumbnail.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    avatar: PropTypes.string,
    textColor: PropTypes.string,
    onPress: PropTypes.func,
};
  
ContactThumbnail.defaultProps = {
    name: "",
    phone: "",
    textColor: "white",
    onPress: null,
};
  
const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "white",
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
      color: "white",
    },
    phone: {
      fontSize: 14,
      marginTop: 5,
      color: "white",
    },
});