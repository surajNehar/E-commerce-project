import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDqhEIB0NOlQjVfodbpj4tkQgplejAdSHo",
    authDomain: "ts-haul-app.firebaseapp.com",
    projectId: "ts-haul-app",
    storageBucket: "ts-haul-app.appspot.com",
    messagingSenderId: "232872093389",
    appId: "1:232872093389:web:7f2f312cd775c4fd992b84",
    databaseURL: "https://ts-haul-app-default-rtdb.firebaseio.com/",
  };

  export const app = initializeApp(firebaseConfig);