import { MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";

const CreateScreen = () => {
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    console.log("photo", photo);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        <TouchableOpacity
          style={styles.makePhotoBtnWrapper}
          onPress={takePhoto}
        >
          <MaterialIcons name="photo-camera" size={20} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <Text>Загрузите фото</Text>
      <TextInput>Название...</TextInput>
      <TextInput>Местность...</TextInput>
      <TouchableOpacity>
        <Text>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  camera: {
    height: 240,
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    // marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  makePhotoBtnWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateScreen;
