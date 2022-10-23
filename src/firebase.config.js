import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKpgr0gs9YN-5b-G6nuCmqJzCzppAbV48",
  authDomain: "food-app-d91e1.firebaseapp.com",
  databaseURL: "https://food-app-d91e1-default-rtdb.firebaseio.com",
  projectId: "food-app-d91e1",
  storageBucket: "food-app-d91e1.appspot.com",
  messagingSenderId: "304034390487",
  appId: "1:304034390487:web:b333acd98afe77463fab92",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
