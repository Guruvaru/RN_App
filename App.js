import React, { Component } from "react";
import Gallery from "./pages/Gallery";
import SingleImage from "./pages/SingleImage";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppNavigation = createStackNavigator(
  {
    Home: Gallery,
    Image: SingleImage
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigation);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
