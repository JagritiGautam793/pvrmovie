import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const TicketScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          margin: 10,
          borderRadius: 6,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text>{route.params.mall}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>English 2D</Text>
          <Text style={{ color: "red", fontSize: 15, fontWeight: "400" }}>
            PVR TICKET
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#DCDCDC",
            borderWidth: 0.5,
            borderStyle: "dashed",
            marginTop: 8,
            height: 1,
            marginLeft:8,
            marginRight:8,
            height:1,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              DATE AND TIME
            </Text>
            <Text style={{ marginTop: 6, fontSize: 15 }}>
              {route.params.showtime}
            </Text>
          </View>

          <Image
            style={{ width: 60, height: 60, borderRadius: 6, marginRight: 10 }}
            source={{
              uri: "https://www.pvrcinemas.com/assets/images/new_logo.png",
            }}
          />
        </View>

        <Text
          style={{
            borderColor: "#DCDCDC",
            borderWidth: 0.5,
            borderStyle: "dashed",
            marginTop: 4,
            height: 1,
            marginLeft:8,
            marginRight:8,
            height:1,

          }}
        />
        <View style={{marginHorizontal:10,marginTop:7,}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text>AUDI 3</Text> 
                <Text style={{color:"gray",fontWeight:"500"}}>{route.params.seats.length} Tickets</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({});
