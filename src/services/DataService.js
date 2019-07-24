import firebase from "firebase";

export const fetchData = callback => {
  const userId = firebase.auth().currentUser.uid || "notlogin";
  const dataRef = firebase.database().ref("data");

  dataRef.child(userId).on("value", snapshot => {
    const dataObj = snapshot.val();
    debugger;
    const dataArray = mapObjectToArray(dataObj);
    callback(dataArray);
  });

  return dataRef;
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