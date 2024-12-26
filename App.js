import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Home />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
});
