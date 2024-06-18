import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import showt from "../pvr/schemaTypes/showtimes";

const TheatreScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);
  const result = seatNumbers.join(" ");

  const renderSeats = () => {
    return route.params.rows.map((row, rowIndex) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
          key={rowIndex}
        >
          <View style={{ width: 30, marginRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>
              {row.row}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((seat, seatIndex) => (
                <Pressable
                  onPress={() => handleSeatPress(row.row, seat.number)}
                  style={[
                    styles.seat,
                    selectedSeats.some(
                      (selectedSeats) =>
                        selectedSeats.row === row.row &&
                        selectedSeats.seat === seat.number
                    ) && styles.selectedSeats,
                    seat.bookingStatus === "disabled" && styles.bookedSeat,
                  ]}
                  disabled={seat.bookingStatus === "disabled"}
                >
                  <Text>{seat.number}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    });
  };
  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);

  console.log(route.params);

  const handleSeatPress = (row, seat) => {
    // check  if the selected seats ===row if empty then out

    const isSelected = selectedSeats.some(
      (selectedSeats) =>
        selectedSeats.row === row && selectedSeats.seat === seat
    );
    // tried to remove the selected  seat from the array
    if (isSelected) {
      setSelectedSeats((prevState) =>
        // basically we are using the filer method to reove the selected seat from the bunch
        prevState.filter(
          (selectedSeats) =>
            selectedSeats.row !== row || selectedSeats.seat !== seat
        )
      );
    } else {
      //    it willbe pushed to the array if not selected  //
      setSelectedSeats((prevState) => [...prevState, { row, seat }]);
    }
  };
  console.log(selectedSeats);

  const pay = () => {
    // const updatedRows = [...rows];
    // selectedSeats.forEach((seat) => {
    //   const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
    //   console.log("row", rowIndex);
    //   const seatIndex = updatedRows[rowIndex].seats.findIndex(
    //     (s) => s.seat === seat.seat
    //   );
    //   console.log("seAT", seatIndex);
    //   updatedRows[rowIndex].seats[seatIndex].bookingStatus = "disabled";
    // });

    //   setRows(updatedRows);
    //   setSelectedSeats([]);
    // a method to disabled the selected seats

    navigation.navigate("Food", {
      mall: route.params.mall,
      showtime: route.params.showtime,
      name:route.params.name,
      selectedDate: route.params.selectedDate,
      seats: result,
      rows: route.params.rows,
      selectedSeats: selectedSeats,
      docId: route.params.docId,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
          <Text>{route.params?.mall}</Text>
        </Pressable>
      ),
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#F5F5F5",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
    });
  }, []);

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>
          SCREEN THIS WAY
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontSize: 15,
            color: "gray",
            marginBottom: 20,
          }}
        >
          CLASSIC (240){" "}
        </Text>
        {renderSeats()}
        <View
          style={{
            backgroundColor: "#D8D8D8",
            padding: 10,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 60,
            gap: 30,
          }}
        >
          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="#ffc40c"
            />
            <Text>selected</Text>
          </View>
          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="white"
            />
            <Text>vacant</Text>
          </View>
          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="gray"
            />
            <Text>booked</Text>
          </View>
        </View>

        {/* <Pressable
          onPress={pay}
          style={{
            marginTop: 50,
            backgroundColor: "#E0E0E0",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>selected seats</Text>
          <Text>PAY 100</Text>
        </Pressable> */}
      </ScrollView>

      {selectedSeats.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#FEBE10",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {selectedSeats.length} Seats selected {result}
          </Text>
          <Pressable onPress={pay}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Proceed
            </Text>
          </Pressable>
        </Pressable>
      ) : (
        <Pressable
          style={{
            backgroundColor: "#D3D3D3",
            padding: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            0 SEATS SELECTED
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "C0C0C0",
  },
  selectedSeats: {
    backgroundColor: "#FFD700",
    // borderColor:"transparent",
  },
  bookedSeat: {
    backgroundColor: "#989898",
    borderColor: "transparent",
  },
});
