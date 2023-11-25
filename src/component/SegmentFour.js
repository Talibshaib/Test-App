import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function SegmentFour() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>More place to explore</Text>
      </View>
      <ScrollView horizontal>
        {/* first seg */}
        <View style={styles.container}>
          <View style={styles.cart}>
            <View>
              <Image
                source={{
                  uri: 'https://img.cdn.zostel.com/blog_photo/winter.jpg',
                }}
                style={styles.Image}
              />
            </View>
            <View style={styles.Htext}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/place/Zostel+Plus+Mussoorie/@30.4531049,78.0440267,13.19z/data=!4m18!1m8!3m7!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!2sMussoorie,+Uttarakhand!3b1!8m2!3d30.4597892!4d78.0643723!16zL20vMDU0Mjlq!3m8!1s0x3908d13d843ee3e9:0xdde4f45d018b63ee!5m2!4m1!1i2!8m2!3d30.4806195!4d78.0349743!16s%2Fg%2F11fslq6cck?authuser=0&entry=ttu',
                  );
                }}>
                <Text style={styles.location}>↪Location Masoori</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://uttarakhandtourism.gov.in/destination/mussoorie',
                  );
                }}>
                <Text style={styles.distance}>•Queen of Hills</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* second seg */}

        <View style={styles.container}>
          <View style={styles.cart}>
            <View>
              <Image
                source={{
                  uri: 'https://assets.cntraveller.in/photos/643e71aa780ba83c3d9f8812/16:9/w_1024%2Cc_limit/Lead-%2520The%2520Chavni.jpg',
                }}
                style={styles.Image}
              />
            </View>
            <View style={styles.Htext}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/place/Zostel+Plus+Mussoorie/@30.4531049,78.0440267,13.19z/data=!4m18!1m8!3m7!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!2sMussoorie,+Uttarakhand!3b1!8m2!3d30.4597892!4d78.0643723!16zL20vMDU0Mjlq!3m8!1s0x3908d13d843ee3e9:0xdde4f45d018b63ee!5m2!4m1!1i2!8m2!3d30.4806195!4d78.0349743!16s%2Fg%2F11fslq6cck?authuser=0&entry=ttu',
                  );
                }}>
                <Text style={styles.location}>↪Location Lonavala</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.holidify.com/places/lonavala/');
                }}>
                <Text style={styles.distance}>•Camp in Rain</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* third seg */}
        <View style={styles.container}>
          <View style={styles.cart}>
            <View>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/id/522488531/photo/firestarter-performing-amazing-fire-show-with-sparkles.jpg?s=612x612&w=0&k=20&c=h1SHTouKhRo9hu0r-SYDyrUzrFpTTkBPVV0ZjrCXmn4=',
                }}
                style={styles.Image}
              />
            </View>
            <View style={styles.Htext}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/place/Goa/@15.3479373,72.8236743,9z/data=!3m1!4b1!4m10!1m2!2m1!1shd+photo+in+dark+theme+goa!3m6!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996!15sChpoZCBwaG90byBpbiBkYXJrIHRoZW1lIGdvYZIBFGFkbWluaXN0cmF0aXZlX2FyZWEx4AEA!16zL20vMDFjMW5t?hl=en&entry=ttu',
                  );
                }}>
                <Text style={styles.location}>↪Location Goa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.holidify.com/pages/nightlife-in-goa-things-to-do-1334.html',
                  );
                }}>
                <Text style={styles.distance}>•Nighlife in Goa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    elevation: 4,
  },
  container: {
    flex: 1,
    margin: 4,
    padding: 6,
  },
  cart: {
    backgroundColor: '#265073',
    borderRadius: 6,
    flex: 1,
    alignItems: 'stretch',
    elevation: 4,
    shadowOffset: {
      width: 6,
      height: 1,
    },
    shadowColor: {
      shadowColor: 'black',
    },
  },
  Image: {
    height: 200,
    width: 370,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  Htext: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingTop: 4,
    paddingBottom: 10,
  },
  location: {
    fontSize: 18,
    color: '#ECF4D6',
    fontWeight: '600',
  },
  distance: {
    fontSize: 12,
    color: '#ECF4D6',
    fontWeight: '400',
    paddingTop: 5,
    paddingEnd: 6,
  },
});
