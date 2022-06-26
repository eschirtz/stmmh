<script setup lang="ts">
import { useClipboard } from "@vueuse/core"
const props = defineProps<{
  id: string,
  name: string,
  image?: string,
  time: string
}>();

function copyURL() {
  const url = new URL(`/c/${props.id}`, window.location.origin);
  useClipboard().copy(url.toString());
}

</script>

<template>
  <div class="flex rounded-3xl outline outline-2 outline-black overflow-hidden gap-4 text-black">
    <img class="w-24 h-24 object-cover border-r-2 border-black" :src="image" alt="" width="384" height="512">
    <div class="flex flex-col items-start justify-center">
      <h4 class="font-mono text-2xl font-bold">{{ name }}</h4>
      <p>{{ time }}</p>
    </div>
  </div>
</template>