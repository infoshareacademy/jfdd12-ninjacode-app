import React, { createContext } from "react";
import firebase from "firebase";

export const AuthContext = createContext();

export class AuthProvider extends React.Component {
  state = {
    isLoggedIn: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      const isLoggedIn = user ? true : false;

      this.setState({
        isLoggedIn
      });
    });
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.isLoggedIn} {...this.props} />
    );
  }
}
