import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import CustomStatusBar from "../../components/common/StatusBar";
import {
  width,
  height,
  COLOR,
  FONT_SIZE,
  containerWidth,
} from "../../constants";
import Input from "../../components/common/Input";
import AuthHeader from "../../components/AuthHeader";
import AuthButtons from "../../components/AuthButtons";
import { authLogin } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { emailValid } from "../../services/helpers";
import CustomCheckBox from "../../components/common/Checkbox";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.auth.errorLogin);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!errors.email && !errors.password && !errors.error) return;
    if (Object.keys(errors).length === 1 && !errors.email) {
      setPasswordError(errors.error);

      return;
    }
    setEmailError(errors?.email);
    setPasswordError(errors?.password);
  }, [errors]);

  const clearErrorEmail = () => {
    setEmailError(null);
  };

  const clearErrorPassword = () => {
    setPasswordError(null);
  };

  const onBlurValidationEmail = () => {
    if (!email) {
      setEmailError("The email field is required.");
    } else if (!emailValid(email)) {
      setEmailError("The selected email is invalid.");
    } else {
      setEmailError(null);
    }
  };

  const onBlurValidationPassword = (e) => {
    if (!password) {
      setPasswordError("The password field is required.");
    } else if (password.length < 8) {
      setPasswordError("The password must be at least 8 characters.");
    } else setPasswordError(null);
  };

  const [isRemember, setIsRemember] = useState(false);
  

  const onPressRemember = () => {
    setIsRemember(!isRemember);
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  const onPressLogin = () => {
    if (!email) {
      setEmailError("The email field is required.");
    } else if (!emailValid(email)) {
      setEmailError("The selected email is invalid.");
    } else if (!password) {
      setPasswordError("The password field is required.");
    } else if (password.length < 8) {
      setPasswordError("The password must be at least 8 characters.");
    } else if (emailError || passwordError) {
      return;
    } else {
      dispatch(
        authLogin({ email, password, remember: isRemember }, navigation)
      );
      clearFields();
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLOR.BACK_AUTH_COLOR,
        marginTop: 10,
        height: height,
      }}
    >
      <CustomStatusBar />

      <View style={styles.container}>
        <AuthHeader
          title="Lorem ipsum dolor sit amet?"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore"
          type="Log in"
        />

        <View>
          <Input
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            errorMessage={emailError}
            clearError={clearErrorEmail}
            onBlur={onBlurValidationEmail}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            eye={true}
            errorMessage={passwordError}
            clearError={clearErrorPassword}
            onBlur={onBlurValidationPassword}
          />

          <View style={styles.forgot__container}>
            {Platform.OS === "ios" ? (
              <CustomCheckBox value={isRemember} onValueChange={setIsRemember}  label="Remember me" />
            ) : (
              <View style={styles.checkbox}>
                <CheckBox
                  tintColors={{ true: COLOR.LOGIN_BUTTON_COLOR, false: "gray" }}
                  value={isRemember}
                  onValueChange={setIsRemember}
                />
                <Text
                  onPress={onPressRemember}
                  style={{ fontSize: FONT_SIZE.H3 }}
                >
                  Remember me
                </Text>
              </View>
            )}
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  fontSize: FONT_SIZE.H3,
                  color: COLOR.LOGIN_BUTTON_COLOR,
                }}
              >
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <AuthButtons
          onPress_1={onPressLogin}
          text_1="Log in"
          text_2="Sign up"
          onPress_2={onPressSignUp}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    /* marginTop: 40, */
    alignSelf: "center",
    width: containerWidth,
    height: height - 100,
  },
  forgot__container: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    width: 130,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Login;
