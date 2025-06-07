import { Image, View, TextInput, TouchableOpacity, Text } from "react-native";
import Style from "./loginStyle";
const Login = () => {
  return (
    <View style={Style.container}>
      <Image source={require("../assets/title.png")} />
      <View style={Style.signInContainer}>
        <TextInput
          style={Style.input}
          placeholder="Email"
          placeholderTextColor={"#FFF"}
        ></TextInput>
        <TextInput
          style={Style.input}
          placeholder="Password"
          placeholderTextColor={"#FFF"}
        ></TextInput>
        <TouchableOpacity
          style={Style.button}
          onPress={() => alert("Custom Button pressed")}
        >
          <Text style={Style.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/snorlax.png")} />
    </View>
  );
};

export default Login;
