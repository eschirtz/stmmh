<script setup lang="ts">
  import {getFirestore, collection, getDocs} from "firebase/firestore/lite"
  import Item from "./components/Item.vue"
import { ref } from 'vue';

  

  const items = ref<any[]>([]);

  const db = getFirestore();

  const shitCollection = collection(db, 'shit');
  getDocs(shitCollection).then(snap => {
    console.log(snap.docs);    
    items.value = snap.docs.map(doc => ({...doc.data(), id: doc.id}));
  })

  function createNewItem() {
    console.log('Creating a new item');    
  }
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="font-mono text-4xl font-bold">
      My Sh*t
    </h1>
    <button @click="createNewItem" class="flex items-center justify-center p-3 text-black outline outline-black outline-2 rounded-sm active:bg-orange-700">
      <vue-feather type="plus" />
    </button>
    <Item v-for="item in items" :key="item.id" :name="item.name" :id="item.id"/>
  </div>
</template>

<style>
  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
