import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./AlbumButton";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    imageStyle,
    albumHeaderContent,
    imageContainerStyle,
    headerTextStyle,
    albumImageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image style={imageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={albumHeaderContent}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumImageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  albumHeaderContent: {
    flexdirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
