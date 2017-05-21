import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAxa34y4F8_KnF38np3Fvr7k6VK94Ld5_o",
  authDomain: "character-sheets-475f7.firebaseapp.com",
  databaseURL: "https://character-sheets-475f7.firebaseio.com",
  storageBucket: "character-sheets-475f7.appspot.com",
  messagingSenderId: "842483581038"
}

const app = firebase.initializeApp(config)
const db = app.database()

export default db