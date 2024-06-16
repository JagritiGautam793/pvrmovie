import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PlacesScreen from "../screens/PlacesScreen";
import MovieScreen from "../screens/MovieScreen";
import TheatreScreen from "../screens/TheatreScreen";

// initialising the stacks
const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator(); // defining both the screens

// screen coming under the home screeen
function HomeStackScreens() {
  return (
    <HomeStack.Navigator> 
        {/* "" -- to remove name homescreen from homescreen  */}
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title:""}} />
      <HomeStack.Screen name="Places" component={PlacesScreen}/>
      <HomeStack.Screen name="Movie" component={MovieScreen}/>
      <HomeStack.Screen name="Theatre" component={TheatreScreen}/>
    </HomeStack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "black" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
            
        }}
    
      />
    

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreens}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "black" },
          headerShown: false, 
        //   {} object destructuring .this syntax allows to extract prop from an object and assign them to variable with same name
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default Navigation
