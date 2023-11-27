import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NavMenu() {
  return (
    <View style={styles.navbar}>
      <View style={styles.secbar}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/15237921/pexels-photo-15237921/free-photo-of-portrait-of-a-man-wearing-a-jacket.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
          }}
          style={styles.Image}
        />
        <Text style={styles.text}>Hi. Den!</Text>
        {/* <Icon name="notifications" size={30} color="#900" />; */}
      </View>
      <View>
        <Text style={styles.icontxt}>
          <Icon name="notifications" size={25} color="#265073" />;
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    margin: 4,
    padding: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secbar: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent:'center'
    alignItems: 'center',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    elevation: 4,
  },
  text: {
    color: 'black',
    marginStart: 10,
  },
  icontxt: {
    paddingTop: 8,
  },
});





