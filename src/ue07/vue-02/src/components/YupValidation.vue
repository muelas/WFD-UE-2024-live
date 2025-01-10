<script setup lang="ts">

import {object, string} from "yup";
import {ref} from "vue";

//transformation
const s = string().uppercase().cast("test_me");
const obj = object({
  firstName: string().lowercase().trim(),
})
    .json()
    .camelCase()
    .cast('{"first_name": "jAnE "}'); // { firstName: 'jane' }

//validation
const msg = ref("");
const test = ref("no");

function validateMe() {
  string()
      .min(6, "must be at least ${min} character long")
      .email("must be an email")
      .validate(test.value)
      .then(() => msg.value = "ok")
      .catch((err) => msg.value = err);
}

validateMe();
</script>

<template>
  <h3>Yup transformation - string</h3>
  <p>{{ s }}</p>
  <h3>Yup transformation - object</h3>
  <p>{{ obj }}</p>
  <h3>Yup validation</h3>
  <input v-model="test" @input="validateMe()">
  <p>{{ msg }}</p>
</template>

<style scoped>

</style>
