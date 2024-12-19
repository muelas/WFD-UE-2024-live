<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits<{
  myEvent: [],
  eventWithValue: [val: string],
  timedEvent: []
}>();

const msg = ref("Hello from Emits");

setTimeout(() => {
  emit('timedEvent');
}, 5000);
</script>

<template>
  <button @click="$emit('myEvent')">Emit myEvent</button>
  <hr>
  <input v-model="msg"></input>
  <button @click="$emit('eventWithValue',msg)">Emit eventWithValue</button>
</template>

<style scoped>

</style>
