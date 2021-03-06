import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const containerWidth = width - 50;
export const TOP_ICON_SIZE = 40;
export const POST_PHOTO_HEIGHT = height / 2.2;
export const CHAT_CONTAINER_WIDTH = width - 20;
export const COMMENT_CONTAINER_WIDTH = width - 20;
export const SIZE_PHOTO = 50;
export const SPACE_BETWEEN_PHOTO_AND_MESSAGE = 15;
export const MODAL_HEIGHT_IN_MY_FRIENDS = height / 1.5;
export const MODAL_HEIGHT_IN_MY_PROFILE = height / 3;
export const SIZE_AVA_IN_COMMENTS = 50;
export const SIZE_AVA_IN_ASNWER = SIZE_AVA_IN_COMMENTS / 1.5;

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
  SUCCESS_COLOR: "#67ae58",
  INPUT_COLOR: "#ededed",
  POST_FOOTER_BORDER_COLOR: "#e6e6e6",
  POST_FOOTER_LIKE_AND_DISLIKE_COLOR: "#94979f",
  POST_FOOTER_TELEGA_AND_SHARE_COLOR: "#7dcfff",
  MYFRIENDS_SEPARATOR_COLOR: "#e2e2e2",
  MYFRIENDS_ICONS_AND_BUTTON_TEXT_COLOR: "#626875",
  CHAT_SEPARATOR_COLOR: "#e0e0e0",
};

export const FONT_SIZE = {
  AUTH_BUTTON_FONT_SIZE: 16,
  H1: 22,
  H3: 15,
};

export const MARGIN = {
  DEFAULT_MARGIN_VERTICAL: 10,
  DEFAULT_MARGIN_BETWEEN_AVA_AND_TEXT: 15,
};

export const DEFAULT_TEXT_STYLES_IN_COMMENTS = {
  color: "#525B6A",
  fontWeight: "normal",
  fontSize: 15,
};
