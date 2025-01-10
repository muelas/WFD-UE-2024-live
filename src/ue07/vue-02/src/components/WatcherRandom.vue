<script setup lang="ts">
import {reactive, ref, watch} from "vue";

const nr = ref(0);
const msg = ref("");

// create random number between 0 and 100
// const interval = setInterval(() => nr.value = Math.round(Math.random() * 100), 100);

// watch for changes of nr
watch(nr, (n, o) => {
  if (n === 42) {
    // if answer is found, stop interval and set message
    msg.value = "You found the answer!";
    clearInterval(interval);
  }
  // print old value and new value
  console.log(`old:  ${o}, new: ${n}`);
})

// nested object
const obj = reactive({
  lvl1: 0,
  nested: {
    lvl2: 0
  }
});

// watch for changes of obj - deep watcher
watch(obj, (n, o) => {
  console.log(`Default watch, new=${n}, old=${o} `);
});

// watch for changes of obj - shallow watcher - reacts only on lvl1
watch(obj, (n, o) => {
      console.log(`Shallow watch, new=${n}, old=${o} `);
    },
    {deep: false});

</script>

<template>
  <h3>Random Number Watcher</h3>
  <div>{{ nr }} {{ msg }}</div>

  <button @click="obj.lvl1=6">Change Lvl 1</button>
  <button @click="obj.nested.lvl2=9">Change Lvl 2</button>
</template>

<style scoped>

</style>
