import { StyleSheet } from "react-native";

const topPanelStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#252D45",
    flex: 1,
    width: "100%",
  },
  topPanel: {
    width: "100%",
    height: 58,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 115,
  },
  sidePanelIcon: {
    paddingLeft: 31,
  },
  title: {
    color: "white",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 400,
  },
});
export default topPanelStyle;
