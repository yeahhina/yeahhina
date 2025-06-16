import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useRouter } from "expo-router";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export function useSpotifyAuth() {
  WebBrowser.maybeCompleteAuthSession();
  const router = useRouter();

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
      router.navigate("../components/view/main");
    }
  }, [response]);

  return {
    request,
    response,
    promptAsync,
  };
}
