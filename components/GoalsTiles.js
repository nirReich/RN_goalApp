import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalCard from "./GoalCard";
import React from "react";

export default function GoalsTiles(props) {
  return (
    <View style={styles.contanier}>
      <FlatList
        data={props.goals}
        renderItem={(itemData) => <GoalCard goal={itemData.item} deleteGoal={props.deleteGoal} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    marginVertical: 25,
  },
});
