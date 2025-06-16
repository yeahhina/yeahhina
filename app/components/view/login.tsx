import { useRouter } from "expo-router";
import { Image, View, TextInput, TouchableOpacity, Text } from "react-native";
import Style from "./loginStyle";
import { useSpotifyAuth } from "@/app/API/authSpotify";
const Login = () => {
  const router = useRouter();
  const { promptAsync } = useSpotifyAuth();
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
          onPress={() => router.navigate("./components/view/main")}
        >
          <Text style={Style.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.button}>
          <Text style={Style.buttonText} onPress={() => promptAsync()}>
            Sign In With Spotify
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/snorlax.png")} />
    </View>
  );
};

export default Login;
