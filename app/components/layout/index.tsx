import { Text, View } from "react-native";
import Login from "../view/login";
import Main from "../view/main";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Main />
    </View>
  );
}
