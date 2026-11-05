<template>
  <home />
<div>
  <form v-on:submit.prevent="add">
    <input type="text" v-model="text.text" />
    <input type="submit" value="Add" />
  </form>
</div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
let config = {
    apiKey: "AIzaSyAoIGp6SMAP3CUh7GNzqn-r4mvmq6X2svs",
  authDomain: "software-engineering-pro-3799f.firebaseapp.com",
  databaseURL: "https://software-engineering-pro-3799f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "software-engineering-pro-3799f",
  storageBucket: "software-engineering-pro-3799f.firebasestorage.app",
  messagingSenderId: "519755278302",
  appId: "1:519755278302:web:01034b9edce7e1ae4d5f4f",
  measurementId: "G-0BRW7QJ1ML"
};

let app = initializeApp(config);
let db = getDatabase(app);
let textRef = ref(db, "texts");
export default {
  name: "App", 
  firebase:{
    texts: textRef
  },
  data(){
    return {
      text: {
        text: ""
      }
    }
  },
    methods: {
      add : function(){
        push(textRef, this.text);
        this.text.text = "";
      }
    }
  };
</script>
