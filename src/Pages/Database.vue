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
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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
