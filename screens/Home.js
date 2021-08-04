import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

import {icons, COLORS, SIZES, images, FONTS} from '../constants';

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => console.log('hello')}
          style={{
            width: 50,
            padding: SIZES.padding * 1,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
