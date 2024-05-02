import React from "react";
import {
  View,
  Button,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import useCamera from "./useCamera";
export default function TakeImage() {
  const { image, loading, takePicture, getImageDataURL } = useCamera();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {loading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 350, height: 200 }}
            />
          )}
          <Button title="Take Picture" onPress={takePicture} />
          <Text>Click Below To Extract Image</Text>
          <Button title="Get Image Data URL" onPress={getImageDataURL} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
