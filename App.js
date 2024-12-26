import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider, Text, Divider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Text>Mango</Text>
        <Divider style={styles.divider} />
        <Text>Lemon</Text>
        <Divider style={styles.divider} />
        <Text>Mango</Text>
        <Divider style={styles.divider} />
        <Text variant="bodyLarge" style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
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
