import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeProvider from "ui/themes/ThemeProvider";
import Router from "ui/router/Router";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
