// Overall, this code sets up a context to manage the state related to the
//  selected city and provides a provider component to make this state accessible
//   to all components within its subtree. By using context, any component in the
//    application can access or update the selected city without the need for prop drilling.




import { createContext, useState } from "react";

const Place = createContext();
const PlaceContext = ({ children }) => {
  const [selectedCity, setselectedCity] = useState("");
  // const [locationId,setlocationId]=useState("")

  return (
    <Place.Provider value={{ selectedCity, setselectedCity}}>
      {/* Provider will take us in all of the children located places */}

      {children}
    </Place.Provider>
  );
};

export { Place, PlaceContext };
