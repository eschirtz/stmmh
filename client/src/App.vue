<script setup lang="ts">
import { getFirestore, collection, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore"
import Item from "./components/Item.vue"
import { ref } from 'vue';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(calendar);
dayjs.extend(relativeTime)

const items = ref<any[]>([]);

const db = getFirestore();

const shitCollection = collection(db, 'checkins');
const weekQuery = query(shitCollection, orderBy('timeCreated', 'desc'));

onSnapshot(weekQuery, snap => {
  items.value = snap.docs.map(doc => {
    const date = doc.data().timeCreated.toDate();
    const formattedTime = dayjs(date).calendar();
    return { ...doc.data(), id: doc.id, formattedTime }
  });
});

</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="font-mono text-2xl font-bold">
      Sh*t that makes me happy
    </h1>
    <Item v-for="item in items" :key="item.id" :name="item.name" :id="item.id" :image="item.image"
      :time="item.formattedTime" />
  </div>
</template>

<style>
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
