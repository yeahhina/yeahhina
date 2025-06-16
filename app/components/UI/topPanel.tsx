import { Image, View, TextInput, TouchableOpacity, Text } from "react-native";
import topPanelStyle from "./topPanelStyle";
export const topPanel = () => {
  const sidePanelIcon = require("../assets/icons/sideBar.png");
  return (
    <View style={topPanelStyle.topPanel}>
      <TouchableOpacity style={topPanelStyle.sidePanelIcon}>
        <Image source={sidePanelIcon} style={topPanelStyle.sidePanelIcon} />
      </TouchableOpacity>
      <Text style={topPanelStyle.title}>Home</Text>
    </View>
  );
};
