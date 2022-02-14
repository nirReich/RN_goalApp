import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function GoalCard(props) {
  return (
      <TouchableOpacity onPress={()=>props.deleteGoal(props.goal.key)}>
    <View style={styles.container}>
      <Text>{props.goal.value}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "pink",
    width: "16rem",
  },
});
