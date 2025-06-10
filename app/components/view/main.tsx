import { Image, View, TextInput, TouchableOpacity, Text } from "react-native";
import mainStyle from "./mainStyle";
const Main = () => {
  const sidePanelIcon = require("../assets/icons/sideBar.png");
  return (
    <View style={mainStyle.mainContainer}>
      <View style={mainStyle.topPanel}>
        <TouchableOpacity style={mainStyle.sidePanelIcon}>
          <Image source={sidePanelIcon} style={mainStyle.sidePanelIcon} />
        </TouchableOpacity>
        <Text style={mainStyle.title}>Home</Text>
      </View>
      <View style={mainStyle.homeMainScroll}>
        <View>
          <Text style={mainStyle.title}>Continue Playing</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>Made For You</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>Relax</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>Party</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>WorkOut</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>Romance</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>Sad</Text>
          <View></View>
        </View>
        <View>
          <Text style={mainStyle.title}>Focus</Text>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Main;
