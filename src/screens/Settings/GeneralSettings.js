import React, { useEffect, useCallback, useState, useRef } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import AccountSettings from "../../components/AccountSettings";
import NameAndPhoto from "../../components/Settings/General/NameAndPhoto";
import { getUserData } from "../../redux/account/actions";
import { useDispatch, useSelector } from "react-redux";
import { containerWidth, COLOR, width } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import SettingsWrapper from "../../components/Settings/SettingsWraper";
import SettingsInput from "../../components/Settings/SettingsInput";
import PhotoPicker from "../../components/Settings/General/ImagePicker";
import CustomButton from "../../components/common/Button";
import DatePicker from "../../components/Settings/General/DatePicker";

const GeneralSettings = () => {
  /*  useFocusEffect(
    useCallback(() => {
      dispatch(getUserData());
    }, [])
  ); */

  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(null);
  const [showPicker, setShowPicker] = useState(false)

  const showDataPicker = () => {
    setShowPicker(!showPicker)
  }
  /* const imgRef = useRef(currentImage) */

  useEffect(() => {
    dispatch(getUserData());
  }, [data]);

  const data = useSelector((state) => state.account.data);
  const loading = useSelector((state) => state.account.loading);

  useEffect(() => {
    if (Object.keys(data).length > 0 && data?.avatar?.url) {
      setCurrentImage(data.avatar.url);
    }
  }, [data]);

  console.warn("in general", showPicker);

  const onPick = (uri) => {
    setCurrentImage(uri);
  };

  return (
    <ScrollView>
      <AccountSettings />

      {!loading && Object.keys(data).length > 0 ? (
        <SettingsWrapper>
          <NameAndPhoto
            lastName={data.last_name}
            name={data.first_name}
            url={currentImage}
            size={70}
            
          />

          <SettingsInput placeholder="Name" label="Change name" />
          <SettingsInput
            date={true}
            placeholder="mm/dd/yyyy"
            label="Edit date of birth"
            
            setShow={showDataPicker}
          />
          {showPicker && <DatePicker setShow={setShowPicker}/> }
          <PhotoPicker onPick={onPick} label="Add new photo for profile" />
          <SettingsInput placeholder="Your Email" label="Email" />
          <SettingsInput placeholder="Your Phone" label="Phone" />
          
          <CustomButton styleButton={styles.styleButton} text="Save" />
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
