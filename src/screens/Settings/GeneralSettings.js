import React, { useEffect, useCallback, useState, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import AccountSettings from "../../components/AccountSettings";
import NameAndPhoto from "../../components/Settings/General/NameAndPhoto";
import { getUserData } from "../../redux/account/actions";
import { useDispatch, useSelector } from "react-redux";
import { containerWidth } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import SettingsWrapper from "../../components/Settings/SettingsWraper";
import SettingsInput from "../../components/Settings/SettingsInput";
import PhotoPicker from "../../components/Settings/General/ImagePicker";

const GeneralSettings = () => {


  /*  useFocusEffect(
    useCallback(() => {
      dispatch(getUserData());
    }, [])
  ); */

  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(null);
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

  console.warn("in general", currentImage);

  const onPick = (uri) => {
    setCurrentImage(uri)
  }


  return (
    <View>
      <AccountSettings />
      {!loading && Object.keys(data).length > 0 ? (
        <SettingsWrapper>
          <NameAndPhoto
            lastName={data.last_name}
            name={data.first_name}
            url={currentImage}
          />

          <SettingsInput placeholder="Name" label="Change name" />
          <PhotoPicker onPick={onPick} label="Add new photo for profile" />
        </SettingsWrapper>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    alignSelf: "center",
  },
});

export default GeneralSettings;
