//the component for the login page
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import { Link } from "expo-router";


const Icons = [
    {
      image: require("../assets/images/apple.jpg"),
    },
    {
      image: require("../assets/images/google.jpg"),
    },
    {
      image: require("../assets/images/facebook.jpg"),
    },
    
  ]

const LoginPage = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flex: 1,
          left: 20,
        }}
      >
        <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Text style={styles.mediumText}>Jobizz</Text>
          <Text style={styles.largeText}>Welcome Back</Text>
          <Text style={styles.smallText}>Let's log in, Apply to jobs!</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            marginBottom: 50,
          }}
        >
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email" />
          <Button title="Login" />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <View style={{ backgroundColor: "grey", width: 80, height: 1 }} />
            <Text>Or continue with</Text>
            <View style={{ backgroundColor: "grey", width: 80, height: 1 }} />
          </View>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={Icons}
            renderItem={({ item, index }) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  marginTop: 20,
                }}
              >
                <Image style={styles.roundedImage} source={item.image} />
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>
            Haven't created an account?{" "}
            <Link href="/">
              <Text style={{ color: "blue", fontSize: 16 }}>Register</Text>
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  mediumText: {
    fontSize: 26,
    color: "blue",
  },
  largeText: {
    fontSize: 26,
    color: "black",
  },
  smallText: {
    fontSize: 18,
    color: "grey",
    marginBottom: 20,
  },
  textInputStyles: {
    borderStyle: "solid",
    borderWidth: 24,
    borderRadius: 12,
    borderColor: "grey",
  },
  loginBg: {
    backgroundColor: "#356899",
  },
  roundedImage: {
    borderRadius: 50,
    display: "flex",
    width: 50,
    height: 50,
  },
});
