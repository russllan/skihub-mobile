import React from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const CustomModal = ({ isModal, setModal, children }) => {
  return (
    <Modal
      visible={isModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{width: 250, height: 30, alignItems: 'flex-end'}}>
            <EvilIcons
              name="close"
              size={24}
              color="black"
              onPress={() => setModal(false)}
            />
          </View>
          <View style={{width: 250, height: 100, justifyContent: 'center'}}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Прозрачный цвет для затемнения фона
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Тень для модального окна
  },
});

export default CustomModal;
