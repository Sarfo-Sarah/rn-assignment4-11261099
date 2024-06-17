import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const listItems = [
  {
    icon: require("../assets/images/facebook.jpg"),
    header: "Software Engineer",
    footer: "Facebook",
    amount: "$180,000",
    location: "Accra, Ghana",
  },
  {
    icon: require("../assets/images/google.jpg"),
    header: "Data Analyst",
    footer: "Google",
    amount: "$200,000",
    location: "India",
  },
  {
    icon: require("../assets/images/apple.jpg"),
    header: "Project Manager",
    footer: "Apple Inc.",
    amount: "$500,000",
    location: "USA",
  },
];

const popularJobs = [
  {
    HeaderText: "Jr Executive",
    footer: "Burger King",
    image: require("../assets/images/burger.jpg"),
    amount: "$96000/yr",
    location: "Los Angeles, US",
  },
  {
    HeaderText: "Product Manager",
    footer: "Beats",
    image: require("../assets/images/beats.jpg"),
    amount: "$84,000/yr",
    location: "Florida, US",
  },
  {
    HeaderText: "Product Manager",
    footer: "Apple",
    image: require("../assets/images/apple.jpg"),
    amount: "$84,000/yr",
    location: "Florida, US",
  },
];

export const bottomIcons = [
  {
    image: require("../assets/images/apple.jpg"),
  },
  {
    image: require("../assets/images/google.jpg"),
  },
  {
    image: require("../assets/images/facebook.jpg"),
  },
];

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <View style={styles.rowItem}>
            <View style={styles.flexItem}>
              <Text style={styles.largeFont}>Eric Atsu</Text>
            </View>
            <Image
              style={styles.roundedImage}
              source={require("../assets/images/react-logo.png")}
            />
          </View>
          <View>
            <TextInput placeholder="Search for a job position" />
            <Image />
          </View>

          <View>
            <FlatList
              ListHeaderComponent={
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Featured Jobs
                </Text>
              }
              data={listItems}
              renderItem={({ item, index }) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.flexItem,
                      {
                        backgroundColor: "blue",
                        borderRadius: 10,
                        gap: 10,
                        margin: 10,
                        height: 200,
                      },
                    ]}
                  >
                    <Link href="/login" style={{ fontSize: 20 }}>
                      Login
                    </Link>
                    <View style={[styles.rowItem]}>
                      <Image style={[styles.roundedImage]} source={item.icon} />
                      <View>
                        <Text style={{ fontSize: 20, color: "white" }}>
                          {item.header}
                        </Text>
                        <Text style={{ fontSize: 15, color: "white" }}>
                          {item.footer}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 100,
                      }}
                    >
                      <Text style={{ fontSize: 20, color: "white" }}>
                        {item.amount}
                      </Text>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <FlatList
              ListHeaderComponent={
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Popular Jobs
                </Text>
              }
              data={popularJobs}
              renderItem={({ item, index }) => (
                <View key={index} style={[styles.rowItem, { margin: 18 }]}>
                  <Image source={item.image} style={styles.roundedImage} />
                  <View style={styles.flexItem}>
                    <Text style={{ fontSize: 20 }}>{item.HeaderText}</Text>
                    <Text style={{ fontSize: 16 }}>{item.footer}</Text>
                  </View>
                  <View style={styles.flexItem}>
                    <Text>{item.amount}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              )}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flexItem: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  rowItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  largeFont: {
    fontSize: 24,
    fontWeight: "bold",
  },
  smallFont: {
    fontSize: 16,
    color: "#95969D",
  },
  roundedImage: {
    borderRadius: 50,
    width: 54,
    height: 54,
  },
  searchBackground: {
    backgroundColor: "grey",
    borderColor: "white",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 30,
  },
});
