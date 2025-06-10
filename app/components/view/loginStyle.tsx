import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
  container: {
    backgroundColor: "#687DA8",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },
  signInContainer: {
    gap: 12,
  },
  input: {
    color: "#FFF",
    width: 256,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    fontFamily: "Inter",
    fontSize: 16,
  },
  button: {
    width: 256,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFF",
    marginTop: 26,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 16,
    padding: 9,
  },
});
export default LoginStyle;
