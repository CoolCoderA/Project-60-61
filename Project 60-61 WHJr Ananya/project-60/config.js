import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDhZUbvjK8gtqp0VGcYWwkuOSrDoOQFstM",
  authDomain: "project-60-schoolattedanceapp.firebaseapp.com",
  projectId: "project-60-schoolattedanceapp",
  storageBucket: "project-60-schoolattedanceapp.appspot.com",
  messagingSenderId: "823051716256",
  appId: "1:823051716256:web:8ceec36edbb329667febc5"
};


  firebase.initializeApp(firebaseConfig);
export default firebase.database()