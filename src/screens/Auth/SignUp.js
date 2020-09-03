import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Platform } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useDispatch, useSelector } from "react-redux";
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
import { authSignUp } from "../../redux/auth/actions";
import * as helpers from "../../services/helpers";
import CustomCheckBox from "../../components/common/Checkbox";
import ModalSignup from "../../components/common/Modal/SignUp";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.auth.errorSignUo);
  const [isRemember, setIsRemember] = useState(false);
  console.log(isRemember);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(null);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const [errorRules, setErrorRules] = useState(null);

  const clearErrorEmail = () => {
    setEmailError(null);
  };

  const clearErrorPassword = () => {
    setPasswordError(null);
  };

  const clearErrorFirstName = () => {
    setFirstNameError(null);
  };

  const clearErrorLastName = () => {
    setLastNameError(null);
  };

  const clearErrorConfimPassword = () => {
    setConfirmPasswordError(null);
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
    setLastName("");
    setConfirmPassword("");
    setFirstName("");
  };

  const validation = (name, value) => {
    if (name === "setFirstName") {
      if (helpers.empty([value]) || value.includes("@")) {
        setFirstNameError("Field must not be empty");
        return true;
      }
      setFirstNameError(null);
      return false;
    }
    if (name === "setLastName") {
      if (helpers.empty([value]) || value.includes("@")) {
        setLastNameError("Field must not be empty");
        return true;
      }
      setLastNameError(null);
      return false;
    }
    if (name === "setEmail") {
      if (helpers.emailValid(value)) {
        setEmailError(null);
        return false;
      }
      setEmailError("Please enter a correct email address");
      return true;
    }
    if (name === "setPassword") {
      if (helpers.passwordValid(value)) {
        setPasswordError(null);
        return false;
      }
      setPasswordError(
        `Password can not be smaller than 8 symbols and maximum of 25 symbols with the following requirements: 
- Using minimum one Capital letter,
- Using minimum one small letter. 
- Using minimum one Number, 
- Using at least one Special symbols`
      );
      return true;
    }
    if (name === "setConfirmPassword") {
      if (
        helpers.passwordValid(value) &&
        helpers.passwordConfirm(password, value)
      ) {
        if (email === password) {
          setPasswordError(
            `Password can not be smaller than 8 symbols and maximum of 25 symbols with the following requirements: 
- Using minimum one Capital letter,
- Using minimum one small letter. 
- Using minimum one Number, 
- Using at least one Special symbols`
          );
          return true;
        }
        setConfirmPasswordError(null);
        return false;
      }
      setConfirmPasswordError(
        `Confirm password can not be smaller than 8 symbols and maximum of 25 symbols with the following requirements: 
- Using minimum one Capital letter,
- Using minimum one small letter. 
- Using minimum one Number, 
- Using at least one Special symbols`
      );
      return true;
    }
    return false;
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };

  const onPressSignUp = () => {
    const validValues = [
      { name: "setFirstName", value: firstName },
      { name: "setLastName", value: lastName },
      { name: "setEmail", value: email },
      { name: "setPassword", value: password },
      { name: "setConfirmPassword", value: confirmPassword },
    ];
    const newE = validValues.filter((input) =>
      validation(input.name, input.value)
    );
    if (!isRemember) {
      setErrorRules("Please agree Terms and Conditions");
    } else setErrorRules(null);
    if (newE.length) return;

    dispatch(
      authSignUp({
        email,
        password,
        password_confirmation: confirmPassword,
        first_name: firstName,
        last_name: lastName,
        captcha: "000000",
      })
    );
    clearFields();
  };

  return (
    <ScrollView
      style={{ backgroundColor: COLOR.BACK_AUTH_COLOR, marginTop: 10 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <AuthHeader
            title="Lorem ipsum dolor sit amet?"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore"
            type="Sign up for an account"
          />

          <ModalSignup />

          <View style={{ paddingBottom: 25, paddingTop: 25 }}>
            <Input
              placeholder="First name"
              value={firstName}
              onChangeText={setFirstName}
              onBlur={() => validation("setFirstName", firstName)}
              errorMessage={firstNameError}
              clearError={clearErrorFirstName}
            />
            <Input
              placeholder="Last name"
              value={lastName}
              onChangeText={setLastName}
              onBlur={() => validation("setLastName", lastName)}
              errorMessage={lastNameError}
              clearError={clearErrorLastName}
            />
            <Input
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
              errorMessage={emailError}
              onBlur={() => validation("setEmail", email)}
              clearError={clearErrorEmail}
            />

            <Input
              placeholder="Create password"
              value={password}
              onChangeText={setPassword}
              eye={true}
              errorMessage={passwordError}
              onBlur={() => validation("setPassword", password)}
              clearError={clearErrorPassword}
            />

            <Input
              placeholder="Confirm password"
              value={confirmPassword}
              errorMessage={confirmPasswordError}
              onChangeText={setConfirmPassword}
              eye={true}
              onBlur={() => validation("setConfirmPassword", confirmPassword)}
              clearError={clearErrorConfimPassword}
            />
            {Platform.OS === "ios" ? (
              <View style={styles.forgot__container}>
                <CustomCheckBox containerStyle={styles.containerStyle} />
                <View style={{ width: containerWidth - 20 }}>
                  <Text
                    style={{
                      fontSize: FONT_SIZE.H3,
                      color: COLOR.LOGIN_BUTTON_COLOR,
                      lineHeight: 24,
                    }}
                  >
                    By clicking Register, you accept the Terms and Conditions
                    and Privacy Policy.
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.forgot__container}>
                <CheckBox
                  tintColors={{ true: COLOR.LOGIN_BUTTON_COLOR, false: "gray" }}
                  value={isRemember}
                  onValueChange={() => setIsRemember(!isRemember)}
                />
                <View style={{ width: containerWidth - 20 }}>
                  <Text
                    style={{
                      fontSize: FONT_SIZE.H3,
                      color: COLOR.LOGIN_BUTTON_COLOR,
                      lineHeight: 24,
                    }}
                  >
                    By clicking Register, you accept the Terms and Conditions
                    and Privacy Policy.
                  </Text>
                </View>
              </View>
            )}

            {errorRules ? (
              <View>
                <Text style={{ color: COLOR.ERROR_COLOR }}>
                  Please agree Terms and Conditions
                </Text>
              </View>
            ) : null}
          </View>

          <AuthButtons
            onPress_1={onPressLogin}
            text_1="Log in"
            text_2="Sign up"
            onPress_2={onPressSignUp}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingTop: 25,
    justifyContent: "space-around",
    alignSelf: "center",
    width: containerWidth,
  },
  forgot__container: {
    width: containerWidth,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  remember__chechbox: {
    flexDirection: "row",
    width: width / 3 + 30,
    justifyContent: "space-between",
  },
  containerStyle: {
    width: 30,
  },
});

export default SignUp;
