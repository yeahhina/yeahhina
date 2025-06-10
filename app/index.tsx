import { Text, View } from "react-native";
import Login from "./components/view/login";
import Main from "./components/view/main";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Login />
    </View>
  );
}
