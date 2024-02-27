// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {v4} from 'uuid'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaJiAp0HZoUhtKK1u7Ta6ONEV9AVMpXTo",
    authDomain: "test-c3df0.firebaseapp.com",
    projectId: "test-c3df0",
    storageBucket: "test-c3df0.appspot.com",
    messagingSenderId: "1006542096860",
    appId: "1:1006542096860:web:8846dc71615dd0a3e76719"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


export async function uploadFile(file,) {
    const storageRef = ref(storage, v4())
    return await uploadBytes(storageRef, file).then(snapshot => {
        console.log(snapshot)
    })
}



  