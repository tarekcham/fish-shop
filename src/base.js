import Rebase from 're-base'; // allow to mirror our state to firebase changes
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBC5kmPiGQ_tqitaCnnrD7rTn1I1ptS6xE",
    authDomain: "fish-shop-42b16.firebaseapp.com",
    databaseURL: "https://fish-shop-42b16.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export 
export default base;