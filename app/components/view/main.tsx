import { Image, View, TextInput, TouchableOpacity, Text } from "react-native";
import mainStyle from "./mainStyle";
const Main = () => {
  const sidePanelIcon = require("../assets/icons/sideBar.svg");
  return (
    <View style={mainStyle.mainContainer}>
      <View>
        <Image source={sidePanelIcon} />
        <Text>Home</Text>
      </View>
      <View>
        <Text>Continue Playing</Text>
        <View></View>
      </View>
      <View>
        <Text>Made For You</Text>
        <View></View>
      </View>
      <View>
        <Text>Relax</Text>
        <View></View>
      </View>
      <View>
        <Text>Party</Text>
        <View></View>
      </View>
      <View>
        <Text>WorkOut</Text>
        <View></View>
      </View>
      <View>
        <Text>Romance</Text>
        <View></View>
      </View>
      <View>
        <Text>Sad</Text>
        <View></View>
      </View>
      <View>
        <Text>Focus</Text>
        <View></View>
      </View>
    </View>
  );
};

export default Main;
