import { Collapsible } from "@/components/Collapsible";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "blue",
          fontWeight: "900",
          fontSize: 32,
        }}
      >
        SAVE FOR LATTER
      </Text>
    </View>
  );
}
