import { Dimensions } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export const deviceRatio = deviceHeight / deviceWidth;

export const isTablet = deviceRatio < 1.5;
