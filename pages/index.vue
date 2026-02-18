<script setup lang="ts">
const { $db, $auth } = useNuxtApp();

// пример запроса к Firestore
import { collection, getDocs } from "firebase/firestore";

const usersCollection = collection($db, "users");
const usersSnapshot = await getDocs(usersCollection);
console.log(usersSnapshot.docs.map(doc => doc.data()));
</script>

<template>
  <div>
    <h1>Messages</h1>
    <ul>
      <li v-for="msg in messages" :key="msg.createdAt">{{ msg.text }}</li>
    </ul>
  </div>
</template>
