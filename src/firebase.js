import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC-TJsMVAPuS3iq-M1Q7NQLbwWhSJpZmDE",
    authDomain: "fyp-gaahead-development.firebaseapp.com",
    projectId: "fyp-gaahead-development",
    storageBucket: "fyp-gaahead-development.appspot.com",
    messagingSenderId: "229296579703",
    appId: "1:229296579703:web:8f9f6f6b2d6050fe00d272"
})

export const auth = app.auth()

export default app