import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/login_bg.jpg')}
          style={{ flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Animatable.View
              animation="zoomIn"
              iterationCount={1}
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 26 }}>UBER</Text>
            </Animatable.View>
          </View>
          {/* Bottom half */}
          <Animatable.View animation="slideInUp" iterationCount={1}>
            <View style={{ height: 150, backgroundColor: 'white' }}>
              <View
                style={{
                  opacity: 1, //animated
                  alignItems: 'flex-start',
                  paddingHorizontal: 25,
                  marginTop: 25 // animated
                }}
              >
                <Text style={{ fontSize: 24 }}>Get moving with Uber</Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    marginTop: 25, // animated
                    paddingHorizontal: 25,
                    flexDirection: 'row'
                  }}
                >
                  <Image
                    source={require('../assets/seychelles.png')}
                    style={{ height: 20, width: 24, resizeMode: 'stretch' }}
                  />
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
                      +248
                    </Text>
                    <TextInput
                      style={{ flex: 1, fontSize: 20 }}
                      placeholder="Enter your mobile number"
                      underlineColorAndroid="transparent"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 70,
                backgroundColor: 'white',
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderTopColor: '#e8e8ec',
                borderTopWidth: 1,
                paddingHorizontal: 25
              }}
            >
              <Text style={{ color: '#5a7fdf', fontWeight: 'bold' }}>
                Or connect using a social account
              </Text>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default LoginScreen;
