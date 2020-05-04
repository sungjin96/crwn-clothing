import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Ksia0YNIY9rrFvge9jWs")
  .collection("cartItems")
  .doc("m5cBSxl9KVjyqPHyxB9P");
firestore.doc("/users/Ksia0YNIY9rrFvge9jWs/cartItems/m5cBSxl9KVjyqPHyxB9P");
firestore.collection("/users/Ksia0YNIY9rrFvge9jWs/cartItems");
