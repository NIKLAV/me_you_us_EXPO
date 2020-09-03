import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import AccountSettings from "../../components/AccountSettings";
import NameAndPhoto from "../../components/Settings/General/NameAndPhoto";
import { getUserData } from "../../redux/account/actions";
import { useDispatch } from "react-redux";
import { containerWidth } from "../../constants";

const GeneralSettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <View>
      <AccountSettings />
      <View style={{backgroundColor: '#fff'}}>
        <NameAndPhoto
          lastName="D"
          name="John"
          url={
            "https://sirius-ltd.com.ua/upload/iblock/85b/ruchka_detskaya_gtv_slonik.jpg"
          }
        />
      </View>
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
