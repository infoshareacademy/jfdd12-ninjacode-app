import firebase from "firebase";

export const signIn = (email, password) => {
  console.log("logowanie");
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const signUp = formData => {
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
