import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalsTiles from "./components/GoalsTiles";
import React, { useState } from "react";

export default function App() {
  //--hooks--
  const [enterdGoal, setEnterdGoal] = useState("Add Goal");
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //--methods--
  const handelEnterdGoal = (goal) => {
    setEnterdGoal(goal);
  };

  const addGoal = () => {
    setGoals((goals) => [
      ...goals,
      { key: Math.random().toString(), value: enterdGoal },
    ]);
    setShowModal(false)
  };

  const deleteGoal = (key) => {
    const newGoals = goals.filter((element) => element.key !== key);
    setGoals([...newGoals]);
  };

  const hideModal = ()=> {
    setShowModal(false)
  }

  //-----
  return (
    <View style={styles.container}>
      <Button title={"ADD GOAL"} onPress={() => setShowModal(!showModal)} />
      <GoalInput
        handelEnterdGoal={handelEnterdGoal}
        addGoal={addGoal}
        showModal={showModal}
        hideModal = {hideModal}
        enterdGoal={enterdGoal}
      />
      <GoalsTiles goals={goals} deleteGoal={deleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 35,
  },
});
