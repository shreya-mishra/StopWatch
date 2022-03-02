import { useRef, useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const App = () => {
  const [time, setTime] = useState(0);
  const [f, setF] = useState(false);
  // useRef directly create a reference to DOM elements
  let interval = useRef(null);
  const play = () => {
    interval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setF(true);
  };
  const pause = () => {
    clearInterval(interval.current);
    setF(false);
  };
  const reset = () => {
    clearInterval(interval.current);
    setTime(0);
  };
  return (
    <View>
      <Text style={styles.timer}>{time}</Text>
      <View style={styles.container}>
        <Button onPress={f ? pause : play} title={f ? "Pause" : "Start"} />
        <Button onPress={reset} title="Reset" />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40
  },
  timer: {
    textAlign: "center"
  }
});
