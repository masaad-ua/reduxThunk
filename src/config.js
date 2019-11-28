import firebase from 'firebase'

export const appName = "reduxTh";
export const firebaseConfig = {
    apiKey: "AIzaSyDjA6CeIHuni5lNm4ML1b-TSxJltsYUO8g",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "789814589283"
};

firebase.initializeApp(firebaseConfig);