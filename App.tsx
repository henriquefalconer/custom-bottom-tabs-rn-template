import { SafeAreaView, StatusBar, View } from "react-native";

import Routes from "./src/routes";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#2f7853" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2f7853" }}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </SafeAreaView>
    </View>
  );
};

export default App;
