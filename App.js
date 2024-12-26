import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./components/Home";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Home/>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  body:{
    textAlign:"center",
    color:"red",
  },
  divider:{
    backgroundColor:"red",
    height:2,
    width:"50%",
  }
});
