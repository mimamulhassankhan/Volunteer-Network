import * as firebase from "firebase/app";
import "firebase/auth";

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        name: '',
        email: '',
      }
      return signedOutUser;
    })
    .catch(err => {
      return err.message;
    })
  }