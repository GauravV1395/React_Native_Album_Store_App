import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    // will be rendered as soon as this component is being rendered on the screen.
    const request = axios.get(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    request.then(response => {
      this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
    return this.state.albums.map((album, key) => (
      <AlbumDetail key={key} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>; // to enable scroll in react native we need to make use of the scrollView component. it needs to be added to that view where we are rendering all of our component.
  }
}

export default AlbumList;
