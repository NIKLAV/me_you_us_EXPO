import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { width, height, COLOR, FONT_SIZE } from "../../constants";
import CustomButton from "../../components/common/Button";
import Logo from "../../components/common/Logo/Logo";

const marginSlogan = 45;
const marginLogo = 70;

const Welcome = ({ navigation }) => {
  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        style={styles.background}
        source={require("../../assets/img/home/back.png")}
      >
        <View style={styles.container}>
          <View style={{ marginTop: marginLogo }}>
            <Logo type="welcome" />
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "column",
              height: height - marginLogo - marginSlogan,
            }}
          >
            <View style={styles.slogan}>
              <Text style={styles.slogan__text}>
                Snap photos and share like never before
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.description__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Text>
            </View>

            <View
              style={{
                marginBottom: 50,
                justifyContent: "space-between",
                height: 110,
              }}
            >
              <View>
                <CustomButton
                  styleText={styles.signUp__text}
                  text="Sign up"
                  styleButton={styles.signUp}
                  onPress={onPressSignUp}
                />
              </View>
              <View>
                <CustomButton onPress={onPressLogin} text="Log in" />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  container: {
    alignSelf: "center",
    width: width - 80,
    height: height,
  },
  logo: {
    width: 140,
    marginTop: marginLogo,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo__text: {
    color: COLOR.LOGO_TEXT_COLOR,
    fontSize: 22,
  },
  slogan: {
    marginTop: marginSlogan,
  },
  slogan__text: {
    fontSize: 22,
    color: COLOR.LOGO_TEXT_COLOR,
    lineHeight: 42,
  },
  description: {
    /* marginTop: 100, */
  },
  description__text: {
    fontSize: 16,
    lineHeight: 38,
    color: "#caa1d8",
  },
  signUp: {
    backgroundColor: "#fff",
  },
  signUp__text: {
    color: "#a241ed",
    fontSize: FONT_SIZE.AUTH_BUTTON_FONT_SIZE,
  },
});

export default Welcome;
