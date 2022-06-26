<script setup lang="ts">
import { useClipboard } from "@vueuse/core"
const props = defineProps<{
  id: string,
  name: string
}>();

function copyURL() {
  const url = new URL(`/c/${props.id}`, window.location.origin);
  useClipboard().copy(url.toString());
}
</script>

<template>
  <div class="flex rounded-3xl outline outline-2 outline-black">
    {{ name }}
    <div @click="copyURL">
      {{ id }}
      <vue-feather type="copy" />
    </div>
  </div>
</template>