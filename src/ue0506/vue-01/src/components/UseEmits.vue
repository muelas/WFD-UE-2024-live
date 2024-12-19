<script setup lang="ts">
import Emits from "./Emits.vue";

function handleMyEvent() {
  console.log('myevent received');
}

function handleEventWithValue(val: string) {
  console.log('eventWithValue received: ' + val);
}
</script>

<template>
  <Emits
      v-on:my-event="handleMyEvent"
      @event-with-value="handleEventWithValue"
      @timed-event="console.log('timed event occured')"></Emits>
</template>

<style scoped>

</style>
