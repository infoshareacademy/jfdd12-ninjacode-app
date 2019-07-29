import firebase from "firebase/app";

export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      alert("Nie znaleziono uzytkownika lub błędne hasło.");
    });
};

export const signUp = formData => {
  if (
    formData.email === "" ||
    formData.password === "" ||
    formData.firstName === "" ||
    formData.lastName === ""
  ) {
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(formData.email, formData.password)
    .then(value => {
      firebase
        .database()
        .ref("users")
        .child(value.user.uid)
        .set({
          firstName: formData.firstName,
          lastName: formData.lastName
        });
    });
};
export const signOut = () => {
  firebase.auth().signOut();
};
