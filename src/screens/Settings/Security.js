import React from "react";
import { Text } from "react-native";
import SubTab from "../../components/common/SubTab";
import { COLOR } from "../../constants";

const Security = () => {
  return (
    <>
      <SubTab textFocusColor={COLOR.PRIMARY_COLOR} title={"Account settings"} />
      <Text>Security</Text>
    </>
  );
};

export default Security;
