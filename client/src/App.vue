<script setup lang="ts">
  const items = [{id: '123', name: 'Swim' }, {id: '345', name: 'Garden' }]
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    My Sh*t
  </h1>
  <div v-for="item in items" :key="item.id">
    <vue-feather type="feather"></vue-feather>
  </div>
</template>

<style>

</style>
