<script setup lang="ts">

import {ref} from "vue";

// Wert des Inputfeldes "name"
const name = ref("");
// Wert des Inputfeldes "city"
const city = ref("");
// Wert des Inputfeldes "newsletter"
const news = ref(false);

// Funktion, die aufgerufen wird, wenn das Formular abgeschickt wird
function submitForm() {
  console.log("Form submitted!");
  console.log("Name: ", name.value);
  console.log("City: ", city.value);
  console.log("Newsletter: ", news.value);
}

// Optionen für Select der Cities - einfaches Array
// const cities = ["Wien", "Linz", "Graz"]
// Optionen für Select der Cities - Array mit Objekten
const cities = [
  {label: "Wien", value: "w"},
  {label: "Linz", value: "l"},
  {label: "Graz", value: "g"}
]
</script>

<template>
  <q-page>
    <p>Hi I am the FormPage!</p>
    <q-form @submit="submitForm" class="q-gutter-lg q-ma-sm">
      <q-input v-model="name" label="Name"></q-input>
      <q-select v-model="city" :options="cities" label="City"></q-select>
      <q-checkbox v-model="news" label="Newsletter"></q-checkbox>

      <q-btn type="submit" label="Submit" color="primary"></q-btn>
    </q-form>
  </q-page>
</template>

<style scoped>

</style>
