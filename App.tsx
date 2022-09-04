import {
  Text,
  Image,
  View,
  Button,
  ImageBackground,
  TextInput,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import WheelOfFortune from "./WheelOfFortune";
import React, { useState } from "react";
const knob = require("./assets/images/knob.png");
const center = require("./assets/images/center.png");
const background = require("./assets/images/background2.png");
const logo = require("./assets/images/logo.png");

export default function App() {
  const [winner, setWinner] = useState("Spin to find out!");
  const [modalVisible, setModalVisible] = useState(false);

  const [rewards, setRewards] = useState([
    "Captain Morgan Slippery Sailor",
    "Double Altos Tequila",
    "Two Pickle Backs",
    "Cement Mixer and Praire Fire",
    "Bottle of Champagne",
    "Smirnoff Ice + Dirty Martini Shot",
    "Two Girl Scout Cookie Shots",
    "Mind Eraser",
    "Casamigos Paloma",
    "Double Drink of the Day",
    "Vegas Grenade",
    "Fernet Double Shot",
    "Free Spin + Jameson Caskmates",
    "Fireball Cider Bomb",
  ]);
  const [formValues, setFormValues] = useState([
    "Captain Morgan Slippery Sailor",
    "Double Altos Tequila",
    "Two Pickle Backs",
    "Cement Mixer and Praire Fire",
    "Bottle of Champagne",
    "Smirnoff Ice + Dirty Martini Shot",
    "Two Girl Scout Cookie Shots",
    "Mind Eraser",
    "Casamigos Paloma",
    "Double Drink of the Day",
    "Vegas Grenade",
    "Fernet Double Shot",
    "Free Spin + Jameson Caskmates",
    "Fireball Cider Bomb",
  ]);

  const options = {
    rewards,
    knobSize: 20,
    borderWidth: 100,
    borderColor: "black",
    innerRadius: 70,
    duration: 4000,
    backgroundColor: "black",
    textColor: "black",
    textAngle: "horizontal",
    knob,
    center,
    getWinner: (winner) => {
      setWinner(winner);
    },
    colors: [
      "black",
      "#C50000",
      "white",
      "#C50000",
      "white",
      "#C50000",
      "white",
      "black",
      "#C50000",
      "white",
      "#C50000",
      "white",
      "#C50000",
      "white",
    ],
    textColors: [
      "white",
      "white",
      "black",
      "black",
      "black",
      "black",
      "black",
      "white",
      "white",
      "black",
      "white",
      "black",
      "black",
      "black",
    ],
  };

  const saveRewards = async () => {
    await setRewards(formValues);
  };

  const updateValue = (value, index) => {
    let tempArray = [...formValues];
    tempArray[index] = value?.nativeEvent?.text;
    setFormValues(tempArray);
  };

  return (
    <ImageBackground
      source={background}
      style={{ width: "100%", height: "100%" }}
      resizeMode={"stretch"}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyleHeader}>Rewards</Text>
            {rewards.map((reward, i) => {
              return (
                <TextInput
                  key={i}
                  style={styles.modalText}
                  onChange={(value) => updateValue(value, i)}
                >
                  {reward}
                </TextInput>
              );
            })}
            <View style={styles.saveButtons}>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={async () => {
                  await saveRewards();
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Save Changes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Image
            source={logo}
            style={{
              width: 156,
              height: 66,
            }}
          />
          <View style={{ flex: 2 }}></View>
          <Pressable
            onPress={() => setModalVisible(true)}
            // @ts-ignore
            alignItems={"center"}
            justifyContent={"center"}
            paddingVertical={5}
            paddingHorizontal={5}
            borderRadius={10}
            elevation={3}
            backgroundColor={"#C50000"}
          >
            <Button
              title="Edit Prizes"
              // @ts-ignore
              fontSize={16}
              fontWeight={"bold"}
              letterSpacing={0.25}
              color={"white"}
              onPress={() => setModalVisible(true)}
            />
          </Pressable>
        </View>
        <View style={styles.prizeContainer}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Reward:
          </Text>
          <Text
            style={{
              color: "#C50000",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {winner}
          </Text>
        </View>
        <WheelOfFortune options={options} rewards={rewards} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 100,
  },
  topContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    maxHeight: 100,
  },
  prizeContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    flexGrow: 1,
    maxHeight: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  buttonSave: {
    backgroundColor: "#C50000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleClose: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleHeader: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    borderWidth: 1,
    padding: 5,
  },
  saveButtons: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
