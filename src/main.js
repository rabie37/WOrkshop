import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA4pDvEkwMYvol6iVM1bSc7vphWNF4_kR0",
  authDomain: "workshop1-b8759.firebaseapp.com",
  databaseURL: "https://workshop1-b8759-default-rtdb.firebaseio.com/",
  projectId: "workshop1-b8759",
  storageBucket: "workshop1-b8759.appspot.com",
  messagingSenderId: "419409842565",
  appId: "1:419409842565:web:a6dfb964eea2b79f07b4ec",
  measurementId: "G-WRRPSMXEDN"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
