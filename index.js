// import a library to create a component
import React from "react";
import { Text, AppRegistry, View } from "react-native"; // import destructuring. We will use this when we need to import not the whole library but only a part of it that we need to use.
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
// create a component

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
// style prop of flex:1 is added here to stop the scrollview component from bouncing back aand forth. It allows the component to make use of the entire device's screen to render the entire component.

AppRegistry.registerComponent("DemoProject", () => App); // We need to register atleast one component in the application
