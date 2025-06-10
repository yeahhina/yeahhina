import { useRouter } from "expo-router";
import { Image, View, TextInput, TouchableOpacity, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import Style from "./loginStyle";
import { useEffect } from "react";
const Login = () => {
  WebBrowser.maybeCompleteAuthSession();
  const router = useRouter();
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };
  let message = "false";
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "431bb49e81824ac495badb0c6bc5a513",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: "musa",
        path: "callback",
      }),
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log("Auth success, code:", code);
      router.navigate("./components/view/main");
    }
  }, [response]);
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
