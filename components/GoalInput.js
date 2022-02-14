import { StyleSheet, Modal, View, TextInput, Button } from "react-native";
import React from "react";

export default function GoalInput(props) {
  return (
    <Modal style={styles.modalStyle} visible={props.showModal} animationType="slide">
    <View style={styles.container}>
      <TextInput
        placeholder="Enter goal"
        onChangeText={props.handelEnterdGoal}
        style={styles.input}
        value={props.enterdGoal}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.button}><Button title="Add" onPress={props.addGoal} /></View>
      <View style={styles.button}><Button title="Cancel" onPress={props.hideModal} color="red" /></View>
      </View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1,
    alignItems:'center',
    marginHorizontal:'auto'
  },
  input: {
    width:'80%',
    height: 35,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "14rem",
  },
  buttonContainer:{
    width:"80%",
    flexDirection:"row",
    justifyContent:"space-between"    
  },
  button:{
    width: 80
  }

});
