import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SpotifyApi() {
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
        path: "exp://192.168.0.47:8081/--/spotify-auth-callback",
      }),
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log("Auth success, code:", code);
    }
  }, [response]);
  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
