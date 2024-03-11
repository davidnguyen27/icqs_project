import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_NsyHlNkRIsb76SjrRbI2YyYjpXFE-tA",
  authDomain: "swp-quote.firebaseapp.com",
  databaseURL: "https://swp-quote-default-rtdb.firebaseio.com",
  projectId: "swp-quote",
  storageBucket: "swp-quote.appspot.com",
  messagingSenderId: "371546162765",
  appId: "1:371546162765:web:ceca1257bf5ccd5619be04",
  measurementId: "G-DKKGHKVH2S",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
