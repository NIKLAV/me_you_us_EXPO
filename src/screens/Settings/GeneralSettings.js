import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SubTab from "../../components/common/SubTab";
import NameAndPhoto from "../../components/Settings/General/NameAndPhoto";
import {
  getUserData,
  updateUserData,
  uploadUserPhoto,
} from "../../redux/account/actions";

import { containerWidth, COLOR, width } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import SettingsWrapper from "../../components/Settings/SettingsWraper";
import SettingsInput from "../../components/Settings/SettingsInput";
import PhotoPicker from "../../components/Settings/General/ImagePicker";
import CustomButton from "../../components/common/Button";
import DatePicker from "../../components/Settings/General/DatePicker";
import { emailValid, phoneValid } from "../../services/helpers";

const GeneralSettings = () => {
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState(null);

  const [base64Img, setbase64Img] = useState(null);

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  const [firstName, setFirstName] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);

  const [lastName, setLastName] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);

  const showDataPicker = () => {
    setShowPicker(!showPicker);
  };
  const data = useSelector((state) => state.account.data);
  /* console.log("data", data); */
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const loading = useSelector((state) => state.account.loading);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      data.avatar?.url && setCurrentImage(data.avatar.url);

      setDate(new Date(data.birth_date));
      setEmail(data.email);
      setPhoneNumber(data.phone);
      setFirstName(data.first_name);
      setLastName(data.last_name);
    }
  }, [data]);

  const onPick = (uri, base64) => {
    dispatch(
      uploadUserPhoto({
        encoded_image_data: base64,
        "type": "profile",
      })
    );
    setCurrentImage(uri);
    /* setbase64Img(base64); */
  };

  const fieldsNames = {
    firstName: "firstName",
    email: "email",
    phone: "phone",
    lastName: "lastName",
  };

  const validation = (name, value) => {
    if (name === fieldsNames.lastName) {
      if (value.length === 0) {
        setLastNameError(`The last name field is required.`);
        return true;
      }
      setLastNameError("");
      return false;
    }
    if (name === fieldsNames.firstName) {
      if (value.length === 0) {
        setFirstNameError(`The first name field is required.`);
        return true;
      }
      setFirstNameError("");
      return false;
    }

    if (name === fieldsNames.email) {
      if (emailValid(value)) {
        setEmailError("");
        return false;
      }
      setEmailError("The email must be a valid email address.");
      return true;
    }
    if (name === fieldsNames.phone) {
      
      if (value === null || value === '') {
        setPhoneNumberError('');
        return false;
      } else if (value.length > 0 && phoneValid(value)) {
        setPhoneNumberError('');
        return false;
      }
      setPhoneNumberError("The phone format is invalid.");
      return true;
    }

    return false;
  };

  const save = () => {
    const validValues = [
      { name: fieldsNames.email, value: email },
      { name: fieldsNames.lastName, value: lastName },
      { name: fieldsNames.phone, value: phoneNumber },
      { name: fieldsNames.firstName, value: firstName },
    ];
    const newE = validValues.filter((input) =>
      validation(input.name, input.value)
    );

    if (newE.length) return;
   /*  dispatch(
      uploadUserPhoto({
        encoded_image_data: base64Img,
        "type": "profile",
      })
    ); */
    if (phoneNumber === null) {
      dispatch(
        updateUserData({
          first_name: firstName,
          last_name: lastName,
          email: email,
          birth_date: date,
        })
      );
    } else
      dispatch(
        updateUserData({
          first_name: firstName,
          last_name: lastName,
          email: email,
          birth_date: date,
          phone: phoneNumber,
        })
      ); 
  };

  const clearErrorFirstName = () => {
    setFirstNameError(null);
  };

  const clearErrorLastName = () => {
    setLastNameError(null);
  };

  const clearErorEmail = () => {
    setEmailError(null);
  };

  const clearErrorPhone = () => {
    setPhoneNumberError(null);
  };

  return (
    <ScrollView>
      <SubTab textFocusColor={COLOR.PRIMARY_COLOR} title={"Account settings"} />

      {!loading && Object.keys(data).length > 0 ? (
        <SettingsWrapper>
          <NameAndPhoto
            lastName={data.last_name}
            name={data.first_name}
            url={currentImage}
            size={70}
          />

          <SettingsInput
            value={firstName}
            setValue={setFirstName}
            placeholder="Name"
            label="Change name"
            onBlur={() => validation(fieldsNames.firstName, firstName)}
            errorMessage={firstNameError}
            clearError={clearErrorFirstName}
          />

          <SettingsInput
            value={lastName}
            setValue={setLastName}
            placeholder="Last name"
            label="Change last name"
            onBlur={() => validation(fieldsNames.lastName, lastName)}
            errorMessage={lastNameError}
            clearError={clearErrorLastName}
          />
          <SettingsInput
            date={true}
            value={date}
            placeholder="mm/dd/yyyy"
            label="Edit date of birth"
            setShow={showDataPicker}
          />
          {showPicker && (
            <DatePicker date={date} setDate={setDate} setShow={setShowPicker} />
          )}
          <PhotoPicker onPick={onPick} label="Add new photo for profile" />
          <SettingsInput
            setValue={setEmail}
            value={email}
            placeholder="Your Email"
            label="Email"
            onBlur={() => validation(fieldsNames.email, email)}
            errorMessage={emailError}
            clearError={clearErorEmail}
          />
          <SettingsInput
            value={phoneNumber}
            setValue={setPhoneNumber}
            placeholder="Your Phone"
            label="Phone"
            errorMessage={phoneNumberError}
            onBlur={() => validation(fieldsNames.phone, phoneNumber)}
            textContentType={"telephoneNumber"}
            clearError={clearErrorPhone}
          />

          <CustomButton
            onPress={save}
            styleButton={styles.styleButton}
            text="Save"
          />
        </SettingsWrapper>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    alignSelf: "center",
  },
  styleButton: {
    width: width / 2,
    marginVertical: 20,
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
});

export default GeneralSettings;
