import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBC5o6TrmC4wjJ4hWsmxpbylFq-tKFdAQ4",
  authDomain: "web-app-sample-e87be.firebaseapp.com",
  databaseURL: "https://web-app-sample-e87be.firebaseio.com",
  projectId: "web-app-sample-e87be",
  storageBucket: "web-app-sample-e87be.appspot.com",
  messagingSenderId: "69874656365",
  appId: "1:69874656365:web:5d90e4d4f7a43b1aa1cb64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
