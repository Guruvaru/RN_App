import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import Card from "../components/Card.js";
import { styles } from "../styles/base";
import Loader from "../components/Loader.js";
import { connect } from "react-redux";
import { fetchGallery } from "../store/actions/gallery";

class Gallery extends Component {
	
  componentDidMount() {
    this.props.fetchGallery();
  }
  renderImages() {
    return this.props.data.map((a, i) => {
      return (
        <Card
          name={a.description || a.alt_description}
          author={a.user.username}
          img={a.urls.small}
          key={a.id + i}
          press={() =>
            this.props.navigation.navigate("Image", {
              width: a.width,
              height: a.height,
              img: a.urls.full
            })
          }
        />
      );
    });
  }
  render() {
    return (
      <ScrollView>
        {this.props.loading && this.props.data.length!==0 ? (
          <Loader />
        ) : (
          <View style={styles.container}>{this.renderImages()}</View>
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.gallery.data,
    loading: state.gallery.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGallery: () => dispatch(fetchGallery())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
