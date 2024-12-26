import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Text variant="headlineLarge">Headline Large</Text>
        <Text variant="bodyLarge">Body Large</Text>
        <Text variant="labelSmall">Label Small</Text>
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
});
