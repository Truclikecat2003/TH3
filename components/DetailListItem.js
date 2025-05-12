import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import colors from "../utils/colors";

const DetailListItem = ({ icon, title, subtitle, onPress }) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.borderContainer}>
      <Wrapper onPress={onPress} activeOpacity={0.7}>
        <View style={styles.wrapper}>
          {icon && (
            <Icon name={icon} size={24} style={styles.icon} />
          )}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
        </View>
      </Wrapper>
    </View>
  );
};

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
};

export default DetailListItem;

const styles = StyleSheet.create({
  borderContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  wrapper: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
    color: colors.black,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 14,
    marginTop: 4,
  },
});
