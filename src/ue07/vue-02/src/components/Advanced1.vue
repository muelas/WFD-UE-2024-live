<script setup lang="ts">
import {reactive, type Ref, ref} from "vue";

// 1) Advanced Reactive State

// ref für primitive Datentypen
const x: Ref<number> = ref(1);
x.value = 2;

// ref für Objekte
const user: Ref<{ name: string, age: number }> = ref({name: "Max", age: 4});
user.value.age = 5;

// reactive für Objekte
const user2: { name: string, age: number } = reactive({name: "Felix", age: 6});
user2.age = 7;


</script>

<template>
  <h3>ref für primitive Datentypen</h3>
  <p>{{ x }}</p>
  <h3>ref für Objekte</h3>
  <p>{{ user }}</p>
  <h3>reactive für Objekte</h3>
  <p>{{ user2 }}</p>
</template>

<style scoped>

</style>
