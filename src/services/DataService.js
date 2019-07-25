import firebase from "firebase";

export const fetchData = callback => {
  if (!firebase.auth().currentUser) {
    return null;
  }

  const userId = firebase.auth().currentUser && firebase.auth().currentUser.uid;
  const dataRef = firebase.database().ref("data");
  dataRef.child(userId).on("value", snapshot => {
    const dataObj = snapshot.val() || {};
    const dataArray = mapObjectToArray(dataObj);
    callback(dataArray);
  });

  return dataRef;
};
export const sendData = dataInputForm => {
  const userId = firebase.auth().currentUser && firebase.auth().currentUser.uid;
  console.log(dataInputForm);
  const dataArray = [];
  firebase
    .database()
    .ref("data")
    .child(userId)
    .push(dataInputForm);
};

function mapObjectToArray(obj) {
  const entries = Object.entries(obj);
  const arr = entries.map(entry => {
    const [key, value] = entry;
    return {
      id: key,
      ...value
    };
  });
  return arr;
}
