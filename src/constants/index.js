import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const containerWidth = width - 50;
export const TOP_ICON_SIZE = 40;

export const COLOR = {
  LOGO_TEXT_COLOR: "#fff",
  BACK_AUTH_COLOR: "#fff",
  BACK_MAIN_TOP_TABBAR_COLOR: "#fff",
  HEADER_AUTH_TEXT_COLOR: "#575d6b",
  PLACEHOLDER_TEXT_COLOR: "#a2a2a2",
  LOGIN_BUTTON_COLOR: "#a241ed",
  ERROR_COLOR: "#d23434",
  TOP_ICONS_COLOR: "#9c9fa6",
  PRIMARY_COLOR: "#a241ed",
  LOGO_TABBAR_TEXT_COLOR: "#575d6b",
  PRIMARY_TEXT_COLOR: "#575d6b",
};

export const FONT_SIZE = {
  AUTH_BUTTON_FONT_SIZE: 16,
  H1: 22,
  H3: 15,
};
